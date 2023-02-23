
const {Books,Users,Loans}=require("./models");
const {createBookschema,createUserschema,loanschema}=require("./spec/utils/validations");
async function createBook(book){
    const validatebook=createBookschema.validateAsync(book);
    const newBook=await Books.create(validatebook);

    return newBook;
}
async function createUser(user){
    const validateuser=createUserschema.validateAsync(user);
    const newUser=await Users.create(validateuser);
    return newUser;
}
async function createLoan(loan){
    const validateloan=loanschema.validateAsync(loan);
    const newLoan=await Loans.create(validateloan);
    return newLoan;
}

module.exports={
    createBook,
    createUser,
    createLoan
}