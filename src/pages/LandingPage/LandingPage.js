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

	}
	componentDidUpdate = ({match},{currentId: stateId}) => {
			if(match.url !== this.props.match.url){
				if(this.props.match.url !== '/'){
					const getId = UrlIdConverter(this.props.match.url,this.state.videoList)
					axios.get(Url + VideoArray + getId + '/' + ApiKey)
					.then(response2=>{
						this.setState({
							video: response2.data
						})
					})
				}
				else{
					axios.get(Url + VideoArray + this.state.videoList[0].id + '/' + ApiKey)
					.then(response2=>{
						this.setState({
							video: response2.data
						})
					})
				}
				window.scrollTo(0, 0)
			}
		}

	componentDidMount = () =>{

		axios.get(Url + VideoArray + ApiKey)
		.then(response =>{
				if(this.props.match.url !== '/'){
				const getId = UrlIdConverter(this.props.match.url,response.data)
				axios.get(Url + VideoArray + getId + '/' + ApiKey)
				.then(response2=>{
					this.setState({
						videoList: response.data,
						video: response2.data
					})
				})
			}
			else{
				axios.get(Url + VideoArray + response.data[0].id + '/' + ApiKey)
				.then(response2=>{

					this.setState({
						videoList: response.data,
						video: response2.data
					})
				})
			}
			window.scrollTo(0, 0)
		})
	}

	render = () =>{
		return(
			<>
			{ this.state.videoList && this.state.video   && (
			<>
				<Route key='uniqueKey' path='/' component={Header}  />
				<VideoPlayer key={this.state.curentId}  data={this.state.video} />
				<div className='component'>
					<VideoSection key={this.state.curentId}  data={this.state.video} />
					<Switch>
					<Route key='uniqueKey1' path='/:id' render ={(routerProps)=>
						<VideoList key={this.state.currentId} data={this.state.videoList} {...routerProps} />
					} />
					<Route key='uniqueKey2' path='/' render ={(routerProps)=>
						<VideoList key={this.state.currentId} data={this.state.videoList} {...routerProps} />
					} />
					</Switch>
				</div>
			</>
			)}
			</>
		);
	}
}
export default Brainflix;

