//import express 
const express = require('express');

//import cors
const cors = require('cors');

//import dataservices
const dataservices = require('./services/dataServices');

//create an application using express
const app = express();

//using cors specify the  origin to the server
app.use(cors({

    origin:'http://localhost:4200'
}))

//set up a port number
app.listen(3000,()=>{
    console.log('Listening on port:3000');
})

//use json parser for server responses
app.use(express.json())

//api call to get all product
app.get('/all-products',(req,res)=>{
    //console.log('hii');
    dataservices.getProducts().then(
        result=>{
          // console.log('hr');
            res.status(result.statusCode).json(result)
        }
    )
})

//api call for addtowishlist
app.post('/addtowishlist',(req,res)=>{
    //console.log('heyy');
    dataservices.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
        result=>{
           //console.log('hr');
            res.status(result.statusCode).json(result)
        }
    )
})

//api call to get all product
app.get('/getwishlist',(req,res)=>{
   // console.log('hii');
    dataservices.getwishlist().then(
        result=>{
           //console.log('hr');
            res.status(result.statusCode).json(result)
        }
    )
})


//api call to delete wishlist
app.delete('/deletewish/:id',(req,res)=>{
    //console.log('hii');
    dataservices.deletewish(req.params.id).then(
        result=>{
           //console.log('hr');
            res.status(result.statusCode).json(result)
        }
    )
})