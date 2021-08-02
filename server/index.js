const express = require('express')
const app = express()
app.use(express.static('./public'))
const PORT = 8080;
const videoRoutes = require('./routes/videoRoutes')
const commentRoutes = require('./routes/commentRoutes')
const cors = require('cors')


app.use(cors())
app.use(express.json())

app.use((req,res,next) =>{
	console.log('first middleware function')
	next();
})

app.use('/videos',videoRoutes) //Load Videos and Post videos
app.use('/videos',commentRoutes)

app.get('/',(req,res) =>{
	res.send('LANDING PAGE')
})

app.listen(PORT, () =>{
	console.log('Server running on: ' + PORT)
})
