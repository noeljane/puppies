//NPMs
const
    express = require('express')
    app = express()
    mongoose = require('mongoose')
    logger = require('morgan')
    bodyParser = require('body-parser')
    //Puppy Variable from Model 
    Puppy = require('./models/Puppy.js')
    //Pull Puppies Controller
    puppiesCtrl = require('./controllers/puppies.js')


//connect to Mongoose
mongoose.connect('mongodb://localhost/robots', function(err){
    console.log(err || "Connected to MongoDB")
})

//Middleware
app.use(logger('dev'))
app.use(bodyParser.json())


//Routes

//Root Route
app.get('/', puppiesCtrl.home)

// Puppy Index
app.get('/puppies',puppiesCtrl.index)

//Puppy Show
app.get('/puppies/:id',puppiesCtrl.show)

// Puppy Post/Add
app.post('/puppies',puppiesCtrl.create)

// Puppy Patch
app.patch('/puppies/:id', puppiesCtrl.update)

//Puppy Delete
app.delete('/puppies/:id', puppiesCtrl.delete)



app.listen(3000,function(err){
    console.log(err || "Server running on 3000")
})