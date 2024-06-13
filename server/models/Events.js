const mongoose=require('mongoose')
const EventSchema=new mongoose.Schema({
    nameevent:String,
    dateevent:String,
    durationevent:String,
    venueevent:String,
    eventfield:String
})
const EventModel=mongoose.model("events",EventSchema)
module.exports=EventModel