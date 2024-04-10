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
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  })
  post.save()
  res.status(201).json({
    message: 'Post added to database!'
  })
})

app.get('/api/posts',(req, res, next) => {

  posts = Post.find()
    .then(posts => {
      res.status(200).json({
        posts: posts,
        message: 'Posts done!'
      })
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({
        error: err
      })
    })
})

app.delete('/api/posts/:id', (req, res, next) => {
  Post.deleteOne({_id: req.params.id})
    .then((res) => {
      console.log('Post deleted!')
      res.status(200).json({
        message: 'Post deleted!'
      })
    })
    .catch(err => {
      console.log(err)
      res.status(400).json({
        error: err
      })
    })
})

module.exports = app