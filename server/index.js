const express = require('express')
const app = express()
app.use(express.static('public'))
const videoRouter = require('./routes/videos')
const commentRouter = require('./routes/comments')
const PORT = 8080;

app.use(express.json())

app.use((req,res,next) =>{
	console.log('Middleware function!')
})

app.use('/videos',videoRouter)
app.use('/videos',commentRouter)

app.listen(PORT,(req,res) => {
	console.log(`Server succesfully setup! At port: ${PORT}`)
})
