import Joi from "joi";

export const TaskSchema = Joi.object({
    id: Joi.number().required(),
    description: Joi.string().required(),
    answerable: Joi.string().required(),
    until: Joi.string().required() || Joi.date().required(),
    active: Joi.boolean().required()
})