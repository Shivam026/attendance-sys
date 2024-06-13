const mongoose=require('mongoose')
const UserSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    wwc:String,
    c_tee:String,
    status:String,
    year:String,
    dob:String,
    age:String,
    address:String,
    suburb:String,
    postcode:String,
    mobile:String,
    emergencycontact:String,
    relation:String,
    gender:String,
    emergencycontactname:String,
    clockon:String,
    clockoff:String,
    contri:String,
    role:{
        type:String,
        default:"visitor"
    }
})
const UserModel=mongoose.model("users",UserSchema)
module.exports=UserModel