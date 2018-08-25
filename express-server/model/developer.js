import  mongoose from 'mongoose'

let developerSchema= mongoose.Schema(
    {
        name:String,
        age:Number,
        gender:String,
        languagues:[]
    }
)

module.exports=mongoose.model("developer",developerSchema,"Developers")