import mongoose from 'mongoose';

const Schema = mongoose.Schema

const todoSchema = new Schema({

    
        
        "email": {type:String,
        required:true},
        password: { type:String,
        required:true},
       todo: { type : Array , "default" : [] }})
          
        
        
      




    

       const todo = mongoose.model("todo", todoSchema);

       export default todo