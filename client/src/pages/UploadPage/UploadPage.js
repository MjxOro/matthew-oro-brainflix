import './UploadPage.scss';
import React from 'react';
import Header from '../../components/Header/Header';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import Details from '../../components/Details/Details';
import Controls from '../../components/Controls/Controls';
import axios from 'axios'

export default class UploadPage extends React.Component{
	state = {
		err: false
	}
	componentDidMount = () => {
	}
	componentDidUpdate = (prevProps, prevState) => {
	}

	handleOnSubmit = (event) =>{
		const form = event.target
		event.preventDefault();
		if(!form.inputTitle.value || !form.inputDescription.value){
			if(!form.inputTitle.value){
				form.inputTitle.value = null;
				const input1 = document.querySelector('.details__input')
				input1.classList.add('details__input--error')
				setTimeout(() =>{
					input1.classList.remove('details__input--error')
				},1000)
			}
			if(!form.inputDescription.value){
				form.inputDescription.value = null;
				const input2 = document.querySelector('.details__textarea')
				input2.classList.add('details__textarea--error')
				setTimeout(() =>{
					input2.classList.remove('details__textarea--error')
				},1000)
			}
		}
		else{
			let eventObj = {
				title: form.inputTitle.value,
				description: form.inputDescription.value
			}
			axios.post(process.env.REACT_APP_URL,eventObj)
			.then(response =>{
				console.log(response)
			})
			alert('Video is now uploading/uploaded')
			this.props.history.goBack()
		}
	}
	render = () => {
		return(
			<>
				<Header />
				<section className='uploadPage'>
					<div className='uploadPage__title-wrapper'>
						<h1 className='uploadPage__title'>Upload Video</h1>
					</div>
						<form onSubmit={this.handleOnSubmit}>
							<div className='uploadPage__wrapper'>
								<Thumbnail />
								<Details />
							</div>
							<Controls />
						</form>
				</section>
			</>
		)
	}
}

