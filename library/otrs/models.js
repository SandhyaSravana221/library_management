const { ARRAY } = require("sequelize");
const {STRING,UUID,UUIDV4,INTEGER,DATE,Model,JSON}=require("sequelize");

const {sequelize} = require("./database");

const Book={
    id:{
        type:UUID,
        primaryKey:true,
        defaultValue:UUIDV4
    },
    title:{
        type:STRING,
        allowNull:false
    },
    author:{
        type:STRING,
        allowNull:false
    },
    isbn:{
        type:STRING,
        allowNull:false
    },
    description:{
        type:STRING,
        allowNull:false
    },
    quantity:{
        type:INTEGER,
        allowNull:false,
        defaultValue:0
    },
    available:{
        type: INTEGER,
        allowNull:false,
        defaultValue:0
    }
}

const User={
    userid:{
        type:UUID,
        primaryKey:true,
        defaultValue:UUIDV4
    },
    Firstname: {
        type:STRING,
        allowNull:false
    },
    Lastname: {
        type:STRING,
        allowNull:false
    },
    gender:{
        type:STRING,
        allowNull:false
    },
    email:{
        type:STRING,
        allowNull:false
    },
    mobile:{
        type:STRING,
        allowNull:false
    }
}

const loan={
    loanid:{
        type:UUID,
        primaryKey:true,
        defaultValue:UUIDV4
    },
    email:{
        type:STRING,
        allowNull:false
    },
    books:{
        type:ARRAY(JSON),
        allowNull:true
    },

}
class Books extends Model{};
Books.init(Book,{
    sequelize,
    modelName:"books",
    //timestamps:true
});

class Users extends Model{};
Users.init(User,{
    sequelize,
    modelName:"users",
    //timestamps:true
});

class Loans extends Model{};
Loans.init(loan,{
    sequelize,
    modelName:"loans",
    //timestamps:true
});

sequelize.sync(Books);
sequelize.sync(Users);
sequelize.sync(Loans);

module.exports={
    Books,
    Users,
    Loans
}