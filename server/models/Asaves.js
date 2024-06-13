const mongoose=require('mongoose')
const ASaveSchema=new mongoose.Schema({
    name:String,
    clk1:String,
    clk2:String,
    da:String
})
const ASaveModel=mongoose.model("asaves",ASaveSchema)
module.exports=ASaveModel