const mongoose = require('mongoose')
// //const { stringify } = require('querystring')
const schema = mongoose.Schema;

const todoSchema = new schema({
    // firstname:{
    //     type:String,
    //     required:true
    // },
    // lastname:{
    //     type:String,
    //     required:true 
    // },
    // email:{
    //     type:String,
    //     required:true
    // },
    activity: {
        type: String,
        required:true
    },

    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },
})
const Todo = mongoose.model("model", todoSchema)
module.exports = Todo;