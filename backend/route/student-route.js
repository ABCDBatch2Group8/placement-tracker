const express = require("express");
const route = express.Router();
const Student = require("../model/student-model");
const IctkStudent = require("../model/ictk-student-model")
const jwt = require('jsonwebtoken');

route.post("/signin",(req,res)=>{
    // res.send("hello")
    let data = {
      name : req.body.data.name,
      email :req.body.data.email,
      dwmsid :req.body.data.dwmsid,
      contactNo : req.body.data.contactNo,
      courseInICT : req.body.data.courseInICT,
      qualification : req.body.data.qualification ,
      stream :req.body.data.stream,
      password : req.body.data.password
  } 
    // console.log(req.body);
    
    console.log(data.email);
    IctkStudent.findOne({"email":data.email}, function(err,val){
      if(err){
        console.log(err);
      }
       if(val === null){
        console.log("no email found");
        res.json({status: "no email found"});
      }
      else{
        {
          console.log("data found in admin db")  
              
          Student.find({"email":data.email}, function(err,docs){
            console.log(docs)
            if(err){
              console.log(err);
            }
            else if(docs.length){       
              console.log("User exists");
                res.json({status: "User Email already registered"});
            }
            else{
              let stud = new Student(data);
              stud.save();
              res.json({status: "Success"});                    
            }         
        }); 
        }
      }

    })
    
         
    
    
    //  res.send("ok")
})
// route.get("/dat",(req,res)=>{
//     Student.find().then((data)=>{res.send(data)})
// })


route.post('/login', (req, res) => {
    // let pswd = req.body.password;
    // let name = req.body.uname;
    // console.log(pswd);
    Student.findOne({'email' :req.body.email},function(err, user){
      if(user=== null){
        console.log("no data found")
        // res.json({status: "user doesnot exist"});
      }
      else if(err) {
        console.log('LOGIN ERROR RESPONSE')
        res.json(err)
    }
     else if((user.email == req.body.email)&&(user.password == req.body.password )){
          console.log("correct");
          let payload = {subject: user.email + user.password};
          let token = jwt.sign(payload, 'secretKey');
          res.status(200).send({token});
    }
    else {
      console.log(" wrong details");
      res.json({status: "invalid"});
    }
  });              
     
})
module.exports = route;
    // .then((user)=>{
    //   console.log(user);
    //         if(!user){
    //           res.status(401).send('Invalid Password');
    //           console.log("invalid")
    //         }
    //         else if(user.password == req.body.password){
    //           let payload = {subject: user.username + user.password};
    //           let token = jwt.sign(payload, 'secretKey');
    //           res.status(200).send({token});
    //         }
    //         else{
    //           res.status(401).send('Invalid Password');
    //         }
    //           })
            // });
