import {Penguin} from '../models/penguin.js'

async function create (req,res){
try {
  const penguin=await Penguin.create(req.body)
  res.json(penguin)
} catch (error) {
  console.log(error)
  res.json(error)
}
}

async function index(req,res){
  try {
    const penguins=await Penguin.find({})
    res.json(penguins)
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}
async function penguinDelete(req,res){
  try {
    const penguin=await Penguin.findByIdAndDelete(req.params.penguinId)
    res.json(penguin)
  
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}
async function penguinUpdate(req,res){
  try {
    const puppy=await Penguin.findByIdAndUpdate(req.params.penguinId,req.body,{new:true})
  } catch (error) {
    console.log(error)
    res.json(error)
  }
}

export {
  create,
  index,
  penguinDelete as delete,
  penguinUpdate as update
}