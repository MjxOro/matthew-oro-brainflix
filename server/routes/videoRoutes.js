const express = require('express')
const router = express.Router()
const fs = require('fs')
const videoFile = JSON.parse(fs.readFileSync("data/video-details.json"))


router.get('/',(req,res) =>{
	res.json(videoFile)
})
router.get('/:videoId',(req,res) =>{
	const videoFile = JSON.parse(fs.readFileSync("data/video-details.json"))
	const index = videoFile.findIndex(elem =>{return elem.id === req.params.videoId})
	res.json(videoFile[index])
})


module.exports = router
