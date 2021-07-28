const express = require("express");
const  mongoose = require("mongoose");
const validator = require("validator");

const bloggersSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:[true,"Email already exists"],
        validator(value)
        {
            if(!validator.isEmail(value))
            {
                throw new Error("Invalid Email")
            }
        }
    },

    username:{
        type:String,
        required:true,
        unique:[true,"Username already exists"]
    },

    blog:{
        type:String,
        required:true
    },
})

const Blogger = new mongoose.model('Blogger',bloggersSchema);

module.exports = Blogger;