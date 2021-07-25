import './UploadPage.scss';
import React from 'react';
import Header from '../../components/Header/Header';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import Details from '../../components/Details/Details';
import Controls from '../../components/Controls/Controls';
import axios from 'axios';
import { Router,Switch } from 'react-router-dom';
import { Headers } from 'form-data';

export default class UploadPage extends React.Component{
	state = {
	}
	componentDidUpdate = (prevProps, prevState) => {
	}
	componentDidMount = () => {
	}
	render = () => {
		return(
			<>
				<Header />
				<section className='uploadPage'>
					<div className='uploadPage__title-wrapper'>
						<h1 className='uploadPage__title'>Upload Video</h1>
					</div>
						<form>
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

