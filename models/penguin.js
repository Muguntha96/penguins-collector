import mongoose from "mongoose"

const Schema=mongoose.Schema

const penguinSchema=new Schema({
  name:{type:String,required:true},
  age:{type:Number,default:0},
  breed:{type:String,require:true},
  region:{
    type:String,
    default:'Atlantic',
    enum:['Atlantic','Pacific','North Region','South Region']
  }
},{
  timestamps:true
})

const Penguin=mongoose.model('Penguin',penguinSchema)

export{
  Penguin   
}