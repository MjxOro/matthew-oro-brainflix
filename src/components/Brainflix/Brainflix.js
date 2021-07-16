import './Brainflix.scss';
import React from 'react';
import videoListData from '../../assets/Data/videos.json';
import mainVideoData from '../../assets/Data/video-details.json';
import VideoSection from '../VideoSection/VideoSection';
import Comments from '../Comments/Comments';
import VideoList from '../VideoList/VideoList';

class Brainflix extends React.Component{
	state = {
		video: mainVideoData,
		videoList: videoListData,

	}
	videoSwitcher = () =>{
		
	}
	render = () =>{
		return(
			<VideoSection mvList={this.state.video} />
			//<Comments cmList={this.state.video}/>
			//<VideoList vList={this.state.videoList}/>




		);
	}
}
export default Brainflix;

