

import todo from "../models/todomodels.js"







const createuser = async (req,res)=>{

    const {email,password} = req.body
  
 try{

    const itemExists = await todo.exists({ email:email });

if (!itemExists){const event =  await todo.create({email,password})
     res.status(200).json(event)
     
     }
    
else{
    return res.status(400).json({error:"already exist"}) 
}
     
     }
     catch(error){
         res.status(400).json({error:error.message})
     }
}

const loginuser = async (req,res)=>{

    const {email,password} = req.body
  
 try{

    const itemExists = await todo.findOne({ email:email,password:password });

if (itemExists){ 
    
    
     res.status(200).json({mssg:itemExists._id})
      
     }
    
     
else{
    return res.status(404).json({error:" does not  exist"}) 
}
     
     }
     catch(error){
         res.status(400).json({error:error.message})
     }
}



const todoshow= async (req,res)=>{


    try{var id = req.params.id
    const itemExists = await todo.findOne({ _id:id});
    
    res.status(200).json({mssg:itemExists.todo})}
    
 catch(error){res.status(400).json({error:error.message})}
}

  
const addtodo= async (req,res)=>{
    console.log(req.body)
    try{var id = req.params.id
       
        const itemExists = await todo.findOneAndUpdate({ _id:id},{todo:req.body},{new:true});

        
        res.status(200).json({itemExists})}
        
     catch(error){res.status(400).json({error:error.message})}

    
}  
    









export{createuser,loginuser,todoshow,addtodo}