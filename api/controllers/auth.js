const express =require ('express');
// import { response } from "express";
// import {db} from "../db.js";

const bcrypt = require ('bcrypt');
const { query, response } = require('express');



const mysql = require ('mysql2');
// const router = require('./routes/auth');

const db = mysql.createConnection ({
    host:"localhost",
    user:"root",
    password: "@Dsd12699",
    database:"blog"
    
});



db.connect((err)=>{
    if(err){
        throw err
    }
    console.log('my sql connected')
})


exports.register = (req,res)=>{
   //CHECK USER EXIST OR NOT
   const q = "SELECT * FROM users WHERE email = ? OR username = ?"

    
   
   db.query(q,[req.body.email, req.body.name], (err,data) =>{

    if (err) return res.json(err)

    if (data.length) return res.status(409).json("user aleredy exist")

    //hash the password
    // const salt = bcrypt.genSaltSync(10);
    // const hash = bcrypt.hashSync(req.body.password, salt);
    
  

    // Insert user in DB

    const q = 'INSERT INTO users (`username` , `email`, `password`) VALUES (?)'
    const values = [
        req.body.username,
        req.body.email,
        // hash, // this is encrypt password
        req.body.password
    ]

    db.query(q, [values], (err, data)=>{
        if (err) return res.json(err);
        return res.status(200).json('user has been created')
         
    })
   });  // q = passing query and [] instetst of quetion mark

};

exports.login = (req,res)=>{
   
}

exports.logout = (req,res)=>{
   
}