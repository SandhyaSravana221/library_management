"use strict"

const {STRING,TEXT, UUID,UUIDV4,INTEGER,DATE}=require("sequelize");

module.exports={
    up:({context: {queryInterface}})=>{
        return queryInterface.createTable("books",{
            id:{
                type: UUID,
                primaryKey:true,
                default: UUIDV4
            },
            title:{
                type: STRING,
                allowNull: false
            },
            author:{
                type: STRING,
                allowNull:false
            },
            isbn:{
                type: STRING,
                allowNull:false,
                
                
            },
            quantity:{
                type: INTEGER,
                default:1
            },
            description:{
                type: TEXT,
                allowNull:false
            },
            available:{
                type: INTEGER,
                allowNull:false,
                default:0
            },
            createdAt:{
                type: DATE,
                allowNull:false
            },
            updatedAt:{
                type:DATE,
                allowNull: false
            },

        })
    },
    down:({context:{queryInterface}})=>{
        return queryInterface.dropTable("books");
    },
}