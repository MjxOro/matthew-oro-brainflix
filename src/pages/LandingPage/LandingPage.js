import './LandingPage.scss';
import React from 'react';
import videoListData from '../../assets/Data/videos.json';
import mainVideoData from '../../assets/Data/video-details.json';
import Header from '../../components/Header/Header';
import VideoSection from '../../components/VideoSection/VideoSection';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoList from '../../components/VideoList/VideoList';
import { Route, Switch} from 'react-router-dom'
import { UrlIdCheck, UrlIdConverter } from '../../javascriptHelper';
import axios from 'axios';
import { Url,ApiKey,VideoArray} from '../../apiKey';
class Brainflix extends React.Component{

	state = {
		video: null,
		videoList: null,
		currentId: null,

	}
	componentDidUpdate = (prevProps,prevState) => {
		
	}

	componentDidMount = () =>{
		axios.get(Url + VideoArray + ApiKey)
		.then(response =>{
			this.setState({videoList: response.data})
			this.setState({currentId: response.data[0].id})
			console.log(this.state.currentId)
			axios.get(Url + VideoArray + this.state.currentId + '/' + ApiKey)
			.then(response2 => {
				this.setState({video: response2.data})
			})
		})
	{/*axios.get(Url + VideoArray + this.state.currentId + '/' + ApiKey)
			.then(response =>{
				console.log(response)
				this.setState({videoList: response})
			})
	*/}
	}

	render = () =>{
		return(
			<>
			{ this.state.videoList && this.state.video && this.state.currentId  && (
			<>
			<Route key='uniqueKey' path='/' component={Header}  />
			<VideoPlayer key={this.state.curentId}  data={this.state.video} currentId={this.state.currentId} />
			<div className='component'>
				<VideoSection key={this.state.curentId}  data={this.state.video} currentId={this.state.currentId} />
				<Switch>
				<Route key='uniqueKey1' path='/:id' render ={(routerProps)=>
					<VideoList key={this.state.currentId} data={this.state.videoList} currentId={this.state.currentId} {...routerProps} />
				} />
				<Route key='uniqueKey2' path='/' render ={(routerProps)=>
					<VideoList key={this.state.currentId} data={this.state.videoList} currentId={this.state.currentId} {...routerProps} />
				} />
				</Switch>
			</div>
			</>
			)}
			</>
		);
	}
}
			//	<VideoList key={this.state.videoList.id} vList={this.state.videoList} elemNum={this.state.indexNumber} switcher={this.videoSwitcher} />
export default Brainflix;

