
const Joi = require('joi')
const validation = (data)=>{
    const schema = Joi.object({
        firstname: Joi.string().max(30).required(),
		lastname: Joi.string().max(30).required(),
        phone: Joi.number().min(11).required(),
        email: Joi.string().email().required(),
		date: Joi.date().required(),
		time: Joi.string().required(),
		service: Joi.string().required(),
        current: Joi.string().required(),
        dentist: Joi.string().allow(''),
        message: Joi.string().allow('').max(100),
        status: Joi.string().allow('')
        
    });
    return schema.validate(data);
}
module.exports = validation;

