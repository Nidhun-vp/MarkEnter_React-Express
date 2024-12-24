const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');

const app=express();

//middleware
app.use(cors());
app.use(express.json());

//mongodb connection

const url='mongodb://localhost:27017/your_database_name';
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=> console.log('connected to mongoDB successfully'))
.catch(err => console.error('Error connecting to Mongodb',err));

//define schema
const itemSchema=new mongoose.Schema({
    name:String,
    price:Number,
    description:String
});
const item=mongoose.model('Item',itemSchema);

const StudentSchema=new mongoose.Schema({
    name:String,
    mark1:Number,
    mark2:Number,
    mark3:Number
    
});

const Student=mongoose.model('Student_new',StudentSchema);

//api endpoints

app.post('/api/items',async (requestAnimationFrame,res)=>{
    try{
        const newItem=new item(req.body);
        await newItem.save();
        res.status(201).json(newItem);
    }catch(err){
        res.status(500).json({error:'failed to create item'})
    }
});

app.get('/api/items',async (requestAnimationFrame,res)=>{
    try{
        const items=await Ttem.find();
        res.status(200).json(items);
    }catch(err){
        res.status(500).json({error:'failed to fetch item'})
    }
});

app.get('/api/students',async (req,res)=>{
    try{
        const students=await Student.find();
        res.status(200).json(students);
    }catch(err){
        res.status(500).json({error:'failed to fetch item'})
    }
});

app.post('/api/students',async (req,res)=>{
    try{
        const newStudent=new Student(req.body);
        await newStudent.save();
        res.status(201).json(newStudent);
    }catch(err){
        res.status(500).json({error:'failed to create item'})
    }
});

app.listen(4000,()=>console.log("server connect to mongodb on port 4000"))