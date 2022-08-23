const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken')
const student = require("./route/student-route")
const app = express();
app.use(bodyparser.json());
app.use(cors());
// try{
    mongoose.connect('mongodb+srv://fsdgroup8:Group8-1234@fsdgroup8.zkgvc1a.mongodb.net/?retryWrites=true&w=majority',
    (err) => { 
        if(err){
             console.log('Unable to connect to MongoDB server');
             }
             else{
                console.log('Connected to db')
             }
              
})

// catch(err){
//     console.log("not connected to database");
// }

// app.get('/',(req,res)=>{
//     res.send("hello");
// })
 app.use("/student",student);

const port =3000;
 app.listen(port,()=>{
    console.log(`server listning to ${port}`)
 })