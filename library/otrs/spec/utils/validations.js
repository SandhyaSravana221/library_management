const Joi=require("joi");
const createBookschema = Joi.object({
    id:Joi.optional(),
    title:Joi.string().required(),
    author:Joi.string().required(),
    description:Joi.string().required(),
    isbn:Joi.string().required(),
    quantity:Joi.number().required(),
    available: Joi.number().required(),
})

const createUserschema=Joi.object({
    userid: Joi.optional(),
    Firstname: Joi.string().required(),
    Lastname: Joi.string().required(),
    email:Joi.string().required(),
    gender: Joi.string().required(),
    mobile: Joi.string().required(),

})

const loanschema=Joi.object({
    loanid: Joi.string().required(),
    email: Joi.string().required(),
    books:Joi.array().optional(),

});

module.exports ={
    createBookschema,
    createUserschema,
    loanschema
}