const express=require('express');


const {sequelize} = require('./database');
const Router=express.Router();
const {createBook,createUser,createLoan}=require("./modules");
Router.get('/books', async(req,res)=>{
       try{
        const books=await sequelize.models.books.findAll();
        res.status(200).send(books);
       }
       catch(err){
        res.status(400).send(err);
       }
});

Router.post("/books",async(req,res)=>{
    try{
        const book = req.body;
        const newBook=await createBook(book);
        res.status(201).send(newBook);
       }
       catch(err){
        res.status(400).send(err);
       }
   
});

Router.get('/books/:id',async(req,res)=>{
    try{
        const book=await sequelize.models.books.findByPk(req.params.id);
        res.status(200).send(book);
    }
    catch(err){
        res.status(400).send(err);
    }
   
});
Router.post('/books/:id',async(req,res)=>{
    try{
        const book=await sequelize.models.books.update(req.body,{where:{id:req.params.id}});
        res.send(201);
    }
    catch(err){
        res.status(400).send(err);
    }
   
});
    
Router.delete("/books/:id",async(req,res)=>{
    try{
        const deletedbook=await sequelize.models.loans.destroy({
            where:{ id: req.params.id }
        });
        res.send(200);
    }
    catch(err){
        res.status(400).send(err);
    }
   
});
    
Router.get('/users',async(req,res)=>{
    try{
        const users=await sequelize.models.users.findAll();
        res.status(200).send(users);
    }
    catch(err){
        res.status(400).send(err);
    }
});

Router.post("/users",async(req,res)=>{
    try{
        const user = await createUser(req.body);
        res.status(201).send(user);
    }
    catch(err){
        res.status(400).send(err);
    }
});

Router.get('/users/:userid',async(req,res)=>{
    try{
        const user =await sequelize.models.users.findOne({userid:req.params.userid});
        res.status(201).send(user);
    }
    catch(err){
        res.status(400).send(err);
    }
});
Router.post('/users/:userid',async(req,res)=>{
    try{
        const user=await sequelize.models.users.update(req.body,{where:{id: req.params.userid}});
        res.send(201);
    }
    catch(err){
        res.status(400).send(err);
    }
});

Router.delete("/users/:userid",async(req,res)=>{
    try{
        const user =sequelize.models.users.destroy({where:{
            userid:req.params.userid
        }})
        res.send(200);
    }
    catch(err){
        res.status(400).send(err);
    }
});


Router.get('/loans',async(req,res)=>{
    try{
        const loans=await sequelize.models.loans.findAll();
        res.status(200).send(loans);
    }
    catch(err){
        res.status(400).send(err);
    }
});

Router.post("/loans",async(req,res)=>{
    try{
        const loan = await createLoan(req.body);
        res.status(201).send(loan);
    }
    catch(err){
        res.status(400).send(err);
    }
});

Router.get('/loans/:loanid',async(req,res)=>{
    try{
        const loan =await sequelize.models.loans.findOne({loanid:req.params.loanid});
        res.status(201).send(loan);
    }
    catch(err){
        res.status(400).send(err);
    }
});
Router.post('/loans/:loanid',async(req,res)=>{
    try{
        const loan=await sequelize.models.loans.update(req.body,{where:{loanid: req.params.loanid}});
        res.send(201);
    }
    catch(err){
        res.status(400).send(err);
    }
});

Router.delete("/loans/:loanid",async(req,res)=>{
    try{
        const loan =sequelize.models.loans.destroy({where:{
            loanid:req.params.loanid
        }})
        res.send(200);
    }
    catch(err){
        res.status(400).send(err);
    }
});

module.exports = Router; 