const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const cors=require('cors');
const path=require('path');
const app=express();
const port=process.env.PORT||3000;
app.use(cors());
app.use(bodyparser.json());
const admin=require('./routes/admin');


mongoose.connect('mongodb+srv://fsdgroup8:Group8-1234@fsdgroup8.zkgvc1a.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on('connected',()=>{
    console.log("connected to database")
})
 
app.get('/',(req,res)=>{
    res.send('Done');
})

app.use('/admin',admin);

app.listen(port,()=>{
    console.log('Server starts at :'+port);    
})