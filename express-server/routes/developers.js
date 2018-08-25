import express from 'express'
let router = express.Router();
import  developer from '../model/developer'



router.get('/devs', async(req,res)=>{
    //SELECT * FROM developer WHERE name=
    
    try {
      const developers= await developer.find({})
      res.send(developers)        
    } catch (error) {
        console.log(error)
        
    }
})


router.post('/insert', async(req,res)=>{ 
    const dev=req.body;
    console.log(dev)
    try {    
      const developers= await developer.create(dev)
      res.send(developers)
        
    } catch (error) {
        console.log(error)
        
    }
 
     
 

})

module.exports= router