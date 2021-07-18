import './Brainflix.scss';
import React from 'react';
import Header from '../Header/Header'
import videoListData from '../../assets/Data/videos.json';
import mainVideoData from '../../assets/Data/video-details.json';
import VideoSection from '../VideoSection/VideoSection';
import Comments from '../Comments/Comments';
import VideoList from '../VideoList/VideoList';


class Brainflix extends React.Component{
	state = {
		video: mainVideoData,
		videoList: videoListData,
		indexNumber: 0,

	}
	dateConverter = (unixTime) =>{
		let t = new Date(unixTime);
		let y = t.getFullYear();
		let m = t.getMonth();
		let d = t.getDate();		
		if (d<10){
			d = '0' + d;
		}
		if (m<10){
			m = '0' + m;
		}
		return m + '/' + d + '/' + y;
	}
	videoSwitcher = (id) =>{
		if(!id){
			this.setState({indexNumber: 0})
		}
		else{
			let getNum = this.state.video.findIndex(elem=>elem.id === id)
			if(getNum > -1){
				 this.setState({indexNumber: getNum})
			}
		}
	}
	render = () =>{
		return(
			<>
			<Header method={this.videoSwitcher} />
			<VideoSection key={this.state.video.id} converter={this.dateConverter} mvList={this.state.video[this.state.indexNumber]} />
			<Comments key={this.state.video.id} cmList={this.state.video[this.state.indexNumber]} dConverter={this.dateConverter}/>
			<VideoList key={this.state.videoList.id} vList={this.state.videoList} elemNum={this.state.indexNumber} switcher={this.videoSwitcher} />
			</>




		);
	}
}
export default Brainflix;

