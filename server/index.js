const express=require('express')

const bodyParser=require('body-parser')

// local imports
const connectDb=require('./db.js')




const app=express()

// middleware
app.use(bodyParser.json())

app.listen(3000,()=>console.log('server started at http://localhost:3000'))



connectDb().