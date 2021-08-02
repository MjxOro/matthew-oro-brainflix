import './LandingPage.scss';
import React from 'react';
import Header from '../../components/Header/Header';
import VideoSection from '../../components/VideoSection/VideoSection';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import VideoList from '../../components/VideoList/VideoList';
import { Route, Switch } from 'react-router-dom'
import axios from 'axios';

class LandingPage extends React.Component{

	state = {
		video: null,
		videoList: null,
		inputErr: false,
	}

	componentDidMount = () =>{
		axios.get(process.env.REACT_APP_URL)
		.then(({data}) =>{
			this.setState({videoList: data})
			let filter = data.find(elem => {return elem.id === this.props.match.params.id})
			return filter ? axios.get(`${process.env.REACT_APP_URL + filter.id}`) : axios.get(`${process.env.REACT_APP_URL + data[0].id}`)
		})
		.then(({data}) =>{
			this.setState({video: data})
		})
		.catch(resolve =>{
			console.log(resolve)
		})
	}

	componentDidUpdate = ({match}) => {
			if(this.props.match.params.id !== match.params.id){
				if(this.props.match.url === '/'){
					axios.get(`${process.env.REACT_APP_URL + this.state.videoList[0].id}`)
					.then(({data}) =>{
						this.setState({video: data})
					})
					.catch(resolve =>{
						console.log(resolve)
					})
				}
				else{
					axios.get(`${process.env.REACT_APP_URL + this.props.match.params.id}`)
					.then(({data}) =>{
						this.setState({video: data})
					})
					.catch(resolve =>{
						console.log(resolve)
					})
				}
				window.scrollTo(0, 0)
			}
	}
	handleDelete = (event) =>{
		event.preventDefault();
		const commentId = event.target.firstChild.id
		axios.delete(process.env.REACT_APP_URL + this.state.video.id + '/comments/' + commentId)
		.then(response =>{
			return axios.get(process.env.REACT_APP_URL + this.state.video.id)
			.then(({data}) =>{
				console.log(response)
				this.setState({video: data})
			})
		})
		.catch(resolve =>{
			console.log(resolve)
		})

	}
handleOnSubmit = (event) =>{
	event.preventDefault();
	const form = event.target
	if(!form.postComment.value){
			this.setState({inputErr: true})
		setTimeout(() =>{
			this.setState({inputErr: false})
		},1000)
	}
	else{
		let eventObj = {
			name: 'Mohan Muruge',
			comment: form.postComment.value,
		}
		axios.post(process.env.REACT_APP_URL + this.state.video.id + '/comments',eventObj)
		.then(response =>{
			return axios.get(process.env.REACT_APP_URL + this.state.video.id)
		})
		.then(({data}) =>{
			this.setState({video: data})
		})
		.catch(resolve =>{
			console.log(resolve)
		})
		form.postComment.value = null;
	}
}


	render = () =>{
		return(
			<>
			{ this.state.videoList && this.state.video   && (
			<>
				<Header />
				<Route key='uniqueKey1'  path='/' render ={(routerProps)=>
				<VideoPlayer key={this.state.curentId} data={this.state.video} {...routerProps} />
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
export default LandingPage;
