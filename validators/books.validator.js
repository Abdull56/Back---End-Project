const joi = require("joi");

const BookSchema = joi.object({
  title: joi.string().min(5).max(255).trim().required(),
  shortDescription: joi.string().min(5).max(500).trim().optional(),
  longDescription: joi.string().min(8).optional().trim(),
  year: joi.number().integer().required().max(2022),
  isbn: joi.string().min(10).max(13).required(),
  price: joi.number().min(0).required(),
  createdAt: joi.date().default(Date.now),
  lastUpdateAt: joi.date().default(Date.now),
});

async function BookValidationMW(req, res, next) {
  const bodyPayload = req.body;

  try {
    await BookSchema.validateAsync(bodyPayload);
    next();
  } catch (error) {
    next({ message: error.details[0].message, status: 400 });
  }
}

module.exports = BookValidationMW;
