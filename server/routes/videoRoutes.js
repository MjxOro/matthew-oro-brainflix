const express = require('express')
const router = express.Router()
const fs = require('fs')
const videoFile = JSON.parse(fs.readFileSync("data/video-details.json"))
const {v4: uuidv4 } = require('uuid')


router.get('/',(req,res) =>{
	const videoFile = JSON.parse(fs.readFileSync("data/video-details.json"))
	const videoArr = videoFile.map(elem =>{
		return {
			id: elem.id,
			title: elem.title,
			channel: elem.channel,
			image: elem.image,
		}
	})
	res.json(videoArr)
})
router.get('/:videoId',(req,res) =>{
	const videoFile = JSON.parse(fs.readFileSync("./data/video-details.json"))
	const index = videoFile.findIndex(elem =>{return elem.id === req.params.videoId})
	res.json(videoFile[index])
})
router.post('/',(req,res) =>{
	const videoFile = JSON.parse(fs.readFileSync("./data/video-details.json"))
	const newVideo = {
		id: uuidv4(),
		title: req.body.title,
		channel: 'Mohan Muruge',
		image: `http://localhost:8080/image${Math.floor(Math.random() * 5)}.jpeg`,
		description: req.body.description,
		views: '0',
		likes: 0,
		duration: '00:00',
		video: 'https://project-2-api.herokuapp.com/stream',
		timestamp: + new Date,
		comments: [],
	}
	videoFile.push(newVideo)
	fs.writeFileSync("./data/video-details.json", JSON.stringify(videoFile))
	res.status(201).json(newVideo)
})
router.delete('/:videoId',(req,res) =>{
	const videoFile = JSON.parse(fs.readFileSync("./data/video-details.json"))
	const index = videoFile.findIndex(elem =>{return elem.id === req.params.videoId})
	videoFile.splice(index,1)
	fs.writeFileSync('./data/video-details.json', JSON.stringify(videoFile))
	res.json(videoFile[index])
})


module.exports = router
