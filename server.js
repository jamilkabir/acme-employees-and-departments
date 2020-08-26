const express = require('express')
const faker = require('faker');
const app = express();
const {models} = require("./db")
const db = require("./db")



app.get('/api/employees',async(req,res,next)=>{
    try {
        res.send(await models.Employee.findAll());
      }
      catch(ex){
        next(ex);
      }
})


const init = async()=> {
    try {
      await db.syncAndSeed();
      const port = process.env.PORT || 3000;
      app.listen(port, ()=> console.log(`listening on port ${port}`));
    }
    catch(ex){
      console.log(ex);
    }
  };
  
  init();
  