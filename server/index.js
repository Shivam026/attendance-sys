const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cookieParser=require('cookie-parser');
const UserModel=require('./models/Users')
const EventModel=require('./models/Events')
const ASaveModel=require('./models/Asaves')

const app=express()
app.use(express.json())
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))
app.use(cookieParser())

mongoose.connect('mongodb://127.0.0.1:27017/employee');
const verifyUser = (req, res, next)=>{
    const token = req.cookies.token;
    if(!token){
        return res.json("Token is missing")
    }else{
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if(err){
                return res.json("Error with token")
            }else{
                if(decoded.role==="admin"){
                    next()
                }else{
                    return res.json("not admin")
                }
            }
        })
    }
    }



app.get('/dashboard/:id',verifyUser,(req,res)=>{
    res.json("Success")
})

app.get('/Cmsuser/:id',verifyUser,(req,res)=>{
    res.json("Success")
})

app.post('/register',(req,res)=>{
    const {name,email,password,wwc,c_tee,status,year,dob,age,address,suburb,postcode,mobile,emergencycontact,emergencycontactname,relation,gender}=req.body;
    bcrypt.hash(password,10)
    .then(hash=>{
        UserModel.create({name,email,password:hash,wwc,c_tee,status,year,dob,age,address,suburb,postcode,mobile,emergencycontact,emergencycontactname,relation,gender})
        .then(user=>res.json("Success"))
        .catch(err=>res.json(err))
    }).catch(err=>res.json(err))
    })

    app.post('/eventregister',(req,res)=>{
        const {nameevent,dateevent,durationevent,venueevent,eventfield}=req.body;
        EventModel.create({nameevent,dateevent,durationevent,venueevent,eventfield})
            .then(event=>res.json("Success"))
            .catch(err=>res.json(err))
        })
        

app.post('/login',(req,res)=>{
    const{email,password} = req.body;
    UserModel.findOne({email: email})
    .then(user =>{
        if(user){
            bcrypt.compare(password,user.password,(err,response)=>{
                if(response){
                    const token=jwt.sign({email: user.email,role:user.role},"jwt-secret-key",{expiresIn:'1d'})
                    res.cookie('token',token)
                    return res.json({Status:"Success",role:user.role,id:user._id})
                }else{
                    return res.json("The password is wrong")
                }
            })
        }else{
            return res.json("user not found")
        }
    })
})    
app.get("/getAllUser",async(req,res)=>{
    try{
        const allUser=await UserModel.find({});
        res.send({status:"ok",data:allUser});
    }catch(error){
        console.log(error);
    }
})

app.get("/getAllEvent",async(req,res)=>{
    try{
        const allEvent=await EventModel.find({});
        res.send({status:"ok",data:allEvent});
    }catch(error){
        console.log(error);
    }
})

app.get("/getAllAsave",async(req,res)=>{
    try{
        const allAsave=await ASaveModel.find({});
        res.send({status:"ok",data:allAsave});
    }catch(error){
        console.log(error);
    }
})

app.get('/getUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.get('/getEvent/:id',(req,res)=>{
    const id=req.params.id;
    EventModel.findById({_id:id})
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
    name:req.body.name,
    address:req.body.address,
    year:req.body.year,
    dob:req.body.dob,
    age:req.body.age,
    postcode:req.body.postcode,
    mobile:req.body.mobile,
    emergencycontact:req.body.emergencycontact,
    relation:req.body.relation,
    emergencycontactname:req.body.emergencycontactname,
    email:req.body.email,
    password:req.body.password,
    wwc:req.body.wwc,
    status:req.body.status,
    c_tee:req.body.c_tee,
    suburb:req.body.suburb,
    gender:req.body.gender

    }).then(users=>res.json(users))
    .catch(err=>res.json(err))
})

app.put('/updateEvent/:id',(req,res)=>{
    const id=req.params.id;
    EventModel.findByIdAndUpdate({_id:id},{
    nameevent:req.body.nameevent,
    dateevent:req.body.dateevent,
    durationevent:req.body.durationevent,
    venueevent:req.body.venueevent,
    eventfield:req.body.eventfield
    
    }).then(users=>res.json(users))
    .catch(err=>res.json(err))
})


app.put('/updateAttendance/:id',(req,res)=>{
    const id=req.params.id;
    UserModel.findByIdAndUpdate({_id:id},{
    name:req.body.name,
    clockon:req.body.clk1,
    clockoff:req.body.clk2,
    contri:req.body.dm




     }).then(users=>res.json(users))
    .catch(err=>res.json(err))
})
app.delete('/deleteUser/:id',(req,res)=>{
    const id= req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

app.delete('/deleteEvent/:id',(req,res)=>{
    const id= req.params.id;
    EventModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})

app.post('/aregsave',(req,res)=>{
    const {name,clk1,clk2,da}=req.body;
    ASaveModel.create({name,clk1,clk2,da})
            .then(event=>res.json("Success"))
            .catch(err=>res.json(err))
        })
    
app.listen(3001,()=>{
    console.log("server is running")
})