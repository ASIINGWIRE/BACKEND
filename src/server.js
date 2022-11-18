const mongoose = require('mongoose')
// mongoose helps us to connect node js to mongodb
const express = require('express')
const router = require("./router/router")
const app = express()
const cors = require('cors')

// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());

const port=8080
 const link = "mongodb+srv://Cohort7:Stimerah@cohort7.3vu0fgb.mongodb.net/test"
// link is similar to url, once called url,even in mongoose.connect should be u rl instead of link
app.use(express.json())
 app.use('/',router)
 app.use(cors())
 
 mongoose.connect(link,()=>{
 app.listen(port,()=>{
    console.log('server is running on port 8080')
    })
}).catch(error=>console.log(error))

app.use(express.static('src'))
app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname +'/todo.html')
})

