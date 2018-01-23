const
    mongoose = require('mongoose')
//Schema
puppySchema = new mongoose.Schema({
    name:{type:String, default:"N/A"},
    age:{type:Number, default: 0},
    breed:{
        type:String,
        minlength: 3, 
        required:true, 
    },
    imageurl: String,
    safeForKids:{type:Boolean, default:true},
    catFriendly:{type:Boolean},
    spayOrNeuter:{type:Boolean, required:true} 
    
}, {timestamps:true})//Schema options

//creates puppy variable
const Puppy = mongoose.model('Puppy', puppySchema)

//makes puppy available in other files
module.exports = Puppy