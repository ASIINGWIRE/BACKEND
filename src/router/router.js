const express = require('express')
const todoSchema = require('../models/model')
// ../ helps you to get out of the that foder and specfic file since you need to interact with the todoSchema
const router = express.Router(); //here we are trying to call a book called Router from a library called express
router.post("/todos",async(req, res) => {
    // todos is just being created its not connected to what we have been using
    // console.log("posting todos")
    const todo = req.body
    const todoData = new todoSchema(todo)
    try{
        await todoData.save()
        return res.status(200).send(todoData)
    } catch(error){
        res.status(401).send(error)
    }
})

router.get("/todos", async (req,res)=>{
    todoSchema.find({}).then((todos)=>{
        return res.status(200).send(todos)
    }).catch((error)=>{
        res.status(401).send(error)
    })
})
module.exports = router;