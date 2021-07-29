import './LandingPage.scss';
import React from 'react';
import Header from '../../components/Header/Header';
import VideoSection from '../../components/VideoSection/VideoSection';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoList from '../../components/VideoList/VideoList';
import { Route, Switch } from 'react-router-dom'
import {  UrlIdConverter } from '../../javascriptHelper';
import axios from 'axios';
import { Url,ApiKey,VideoArray} from '../../apiKey';

class Brainflix extends React.Component{

	state = {
		video: null,
		videoList: null,
		//check if theres errors on inputbox without DOM
		inputErr: false,
	}

	componentDidMount = () =>{
		//Fix Quality
		axios.get(Url+VideoArray+ApiKey)
		.then(({data}) =>{
			this.setState({videoList: data})
			return axios.get(`${Url + VideoArray + data[0].id}/${ApiKey}`)
		})
		.then(({data}) =>{
			this.setState({video: data})
		})
		.catch(error =>{
			console.log(error)
		})
		//==========================================================================

	}

	componentDidUpdate = ({match} , prevState) => {
			//Fix Quality
			if(this.props.match.url !== match.url){
				if(this.props.url === '/'){
					axios.get(`${Url + VideoArray + this.state.videoList[0].id}/${ApiKey}`)
					.then(({data}) =>{
						this.setState({video: data})
					})
				}
				else{
					axios.get(`${Url + VideoArray + this.props.match.params.id}/${ApiKey}`)
					.then(({data}) =>{
						this.setState({video: data})
					})
				}
				console.log('Leak test')
				window.scrollTo(0, 0)
				console.log(this.resetVideos,'inside')
			}

			//====================================================================================
			
	}
	handleDelete = (event) =>{
		//NO DOM
		const getId = UrlIdConverter(this.props.match.url,this.state.videoList)
		event.preventDefault();
		const test = document.querySelectorAll('.comment__posted-wrapper')
		const commentId = event.target.firstChild.id
		axios.delete(Url+ VideoArray + this.state.video.id + '/comments/' + commentId + '/' + ApiKey)
		.then(response =>{
			console.log(response)
			axios.get(Url+ VideoArray + getId + '/' + ApiKey)
			.then(response2 =>{
				this.setState({video: response2.data})
			})
		})
		.catch(resolve =>{
			console.log(resolve)
		})
		setTimeout(()=>{
			test[test.length-2].scrollIntoView()
		},150)


	}
handleOnSubmit = (event) =>{
	//NO DOM
	event.preventDefault();
	const form = event.target
	let eventObj = {
		name: 'Mohan Muruge',
		comment: form.postComment.value
	}
	if(!form.postComment.value){
			this.setState({inputErr: true})
		setTimeout(() =>{
			this.setState({inputErr: false})
		},1000)
	}
	else{
		axios.post(Url+ VideoArray + this.state.video.id + '/comments/' + ApiKey,eventObj)
		.then(response =>{
			console.log(response)
			return axios.get(Url+ VideoArray + this.state.video.id + '/' + ApiKey)
		})
		.then(({data}) =>{
			this.setState({video: data})
		})
		form.postComment.value = null;
	}
	{/*
	else{
		axios.post(Url+ VideoArray + this.state.video.id + '/comments/' + ApiKey,eventObj)
		.then(response =>{
			console.log(response)
			axios.get(Url+ VideoArray + getId + '/' + ApiKey)
			.then(response2 =>{
				console.log(response2)
				this.setState({video: response2.data})
			})
		})
		.catch(resolve =>{
			console.log(resolve)
		})
		setTimeout(()=>{
			test[test.length-1].scrollIntoView()
		},150)
		form.postComment.value = null;
	}
	*/}
}


	render = () =>{
		return(
			<>
			{ this.state.videoList && this.state.video   && (
			<>
				<Route key='uniqueKey' path='/' component={Header}  />
				<Route key='uniqueKey1'  path='/' render ={(routerProps)=>
				<VideoPlayer key={this.state.curentId} resetVideoRef={(video)=>{this.resetVideos = video}}  data={this.state.video} {...routerProps} />
					} />
				<div className='component'>
					<VideoSection key={this.state.curentId}  checkErr={this.state.inputErr} data={this.state.video} handler={this.handleOnSubmit} deleteClick={this.handleDelete} />
					<Switch>
					<Route key='uniqueKey1' exact path='/:id' render ={(routerProps)=>
						<VideoList key={this.state.currentId}  data={this.state.videoList} {...routerProps} />
					} />
					<Route key='uniqueKey2' exact  path='/' render ={(routerProps)=>
						<VideoList key={this.state.currentId}  data={this.state.videoList} {...routerProps} />
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
