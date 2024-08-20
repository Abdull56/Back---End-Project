const joi = require("joi");

const AddAuthorsSchema = joi.object({
  First_Name: joi.string().max(255).trim().required(),
  Last_Name: joi.string().max(255).trim().required(),
  dob: joi.date().greater("1-1-1900").less("1-1-2020").required(),
  country: joi.string().optional(),
  books: joi.array().items(joi.string()).optional(),
  createdAt: joi.date().default(Date.now),
  lastUpdateAt: joi.date().default(Date.now),
});

const AuthorUpdateSchema = joi.object({
  First_Name: joi.string().max(255).trim().optional(),
  Last_Name: joi.string().max(255).trim().optional(),
  dob: joi.date().greater("1-1-1900").less("1-1-2020").optional(),
  country: joi.string().optional(),
  books: joi.array().items(joi.string()).optional(),
  createdAt: joi.date().default(Date.now),
  lastUpdateAt: joi.date().default(Date.now),
});

async function AuthorAddValidationMW(req, res, next) {
  const authorPayload = req.body;

  try {
    await AddAuthorsSchema.validateAsync(authorPayload);
    next();
  } catch (error) {
    next({ message: error.details[0].message, status: 400 });
  }
}

async function AuthorUpdateValidationMW(req, res, next) {
  const authorPayload = req.body;

  try {
    await AuthorUpdateSchema.validateAsync(authorPayload);
    next();
  } catch (error) {
    next({ message: error.details[0].message, status: 400 });
  }
}

module.exports = {
  AuthorAddValidationMW,
  AuthorUpdateValidationMW,
};
