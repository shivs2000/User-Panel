const express=require('express');
const app=express();


const dotenv=require('dotenv');
const mongoose=require('mongoose');
const multer=require('multer');
app.use(express.json());
const router = require('./Routes');

dotenv.config();
mongoose.connect(process.env.MONGO_URL,{

    useNewUrlParser:true,
    useUnifiedTopology:true,
   
})
.then(console.log('mongo'))
.catch((err)=>{
console.log(err);
});

app.use(router);



app.listen(5000,()=>{
console.log("connection made")
});