import './LandingPage.scss';
import React from 'react';
import Header from '../../components/Header/Header';
import VideoSection from '../../components/VideoSection/VideoSection';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoList from '../../components/VideoList/VideoList';
import { Route, Switch} from 'react-router-dom'
import {  UrlIdConverter } from '../../javascriptHelper';
import axios from 'axios';
import { Url,ApiKey,VideoArray} from '../../apiKey';

class Brainflix extends React.Component{

	state = {
		video: null,
		videoList: null,

	}
	componentDidUpdate = ({match} , prevState) => {
			let videoSource = document.querySelector('.video__player')
			if(match.url !== this.props.match.url ) {
				const getId = UrlIdConverter(this.props.match.url,this.state.videoList)

				if(this.props.match.url !== '/'){
					axios.get(Url + VideoArray + getId + '/' + ApiKey)
					.then(response2=>{
						this.setState({
							video: response2.data
						})
					})
					.catch(resolve =>{
						console.log(resolve)
					})
				}
				else{
					axios.get(Url + VideoArray + this.state.videoList[0].id + '/' + ApiKey)
					.then(response2=>{
						this.setState({
							video: response2.data
						})
					})
					.catch(resolve =>{
						console.log(resolve)
					})
				}
				window.scrollTo(0, 0)
			}
				videoSource.load();
			
	}
	_handleDelete = (event) =>{
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
_handleOnSubmit = (event) =>{
	const getId = UrlIdConverter(this.props.match.url,this.state.videoList)
	event.preventDefault();
	const form = event.target;
	const test = document.querySelectorAll('.comment__posted-wrapper')
	let eventObj = {
		name: 'Mohan Muruge',
		comment: form.postComment.value
	}
	if(!form.postComment.value){
		const input = document.querySelector('.comment__input')
		input.value = null;
		input.classList.add('comment__input--error')
		setTimeout(() =>{
			input.classList.remove('comment__input--error')
		},1000)
	}
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
				.catch(resolve =>{
					console.log(resolve)
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
				.catch(resolve =>{
					console.log(resolve)
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
					<VideoSection key={this.state.curentId}  data={this.state.video} handler={this._handleOnSubmit} deleteClick={this._handleDelete} />
					<Switch>
					<Route key='uniqueKey1' exact path='/:id' render ={(routerProps)=>
						<VideoList key={this.state.currentId} data={this.state.videoList} {...routerProps} />
					} />
					<Route key='uniqueKey2' exact  path='/' render ={(routerProps)=>
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
