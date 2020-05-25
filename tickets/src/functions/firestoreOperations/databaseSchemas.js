const Joi = require('@hapi/joi');
const createUserDataSchema = Joi.object({
	firstName: Joi.string()
		.alphanum()
		.required(),

	lastName: Joi.string()
		.alphanum()
		.required(),

	email: Joi.string()
		.email()
		.required(),
});


module.exports = {
	createUserDataSchema
}