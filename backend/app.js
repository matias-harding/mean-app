const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()

// Models
const Post = require('./models/post')

// Express
const app = express()

// Mongoose Connection
mongoose.connect(process.env.MONGODB_CONNECTION)
  .then(() => {
    console.log('Connected to database')
  })
  .catch(() => {
    console.log('Connection failed')
  })
  
// Request body parser
app.use(bodyParser.json())

// Headers config
app.use((req, res, next) => {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Origin', "*")
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  res.setHeader(
    'Access-Control-Allow-Methods', 
    "POST, GET, PATCH, DELETE, OPTIONS"
  )

  next()
})

app.post('/api/posts',(req, res, next) => {
  const post = req.body
  console.log(post)
  res.status(201).json({
    message: 'Success!'
  })
})

app.get('/api/posts',(req, res, next) => {
  let postID = 1
  const posts = [
    {
      "id": postID++,
      "title": "Unforgettable Evening",
      "content": "The ambiance was perfect for our anniversary dinner. The staff went above and beyond, making us feel special. Every dish was a delight, especially the seared scallops."
    },
    {
      "id": postID++,
      "title": "Family Friendly and Delicious",
      "content": "Took the kids on Saturday and had a great time. The menu has something for everyone, and the kids' play area is a godsend. The pizza was a hit with the little ones!"
    },
    {
      "id": postID++,
      "title": "Best Brunch in Town",
      "content": "Sunday brunch here is a must-try! The French toast with fresh berries is my go-to, and their coffee is simply the best. Cozy atmosphere and friendly service always."
    },
    {
      "id": postID++,
      "title": "Exquisite Vegetarian Options",
      "content": "As a vegetarian, it's often hard to find a variety of options, but this place is a gem. The vegetarian lasagna was rich in flavor, and the garden salad was fresh and crisp."
    },
    {
      "id": postID++,
      "title": "A Disappointing Experience",
      "content": "Unfortunately, our visit didn't meet expectations. The service was slow, and my steak was overcooked. However, the manager was understanding and offered a complimentary dessert."
    }
  ]
  
  res.status(200).json({
    posts: posts,
    message: 'Done!'
  })
})

module.exports = app