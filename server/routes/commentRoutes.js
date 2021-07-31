const express = require('express')
const router = express.Router()
const fs = require('fs')
const {v4: uuidv4 } = require('uuid')

router.post('/:videoId/comments',(req,res) =>{
	const videoFile = JSON.parse(fs.readFileSync("./data/video-details.json"))
	const index = videoFile.findIndex(elem =>{return elem.id === req.params.videoId})
	const newComment = {
		name: req.body.name,
		comment: req.body.comment,
		id: uuidv4(),
		likes: 0,
		timestamp: + new Date(),
	}
	videoFile[index].comments.push(newComment)
	fs.writeFileSync("./data/video-details.json",JSON.stringify(videoFile))
	res.status(201).json(videoFile)
})
router.delete('/:videoId/comments/:commentId',(req,res) =>{
	const videoFile = JSON.parse(fs.readFileSync("./data/video-details.json"))
	const index = videoFile.findIndex(elem =>{return elem.id === req.params.videoId})
	const commentIndex = videoFile[index].comments.findIndex(elem => {return elem.id === req.params.commentId})
	videoFile[index].comments.splice(commentIndex,1)
	fs.writeFileSync("./data/video-details.json", JSON.stringify(videoFile))
	res.json(videoFile[index].comments[commentIndex])

})
module.exports = router
