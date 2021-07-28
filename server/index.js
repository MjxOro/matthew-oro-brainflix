const express = require('express')
const app = express()
app.use(express.static('public'))
const videoRouter = require('./routes/videos')
const commentRouter = require('./routes/comments')
const PORT = 8080;

