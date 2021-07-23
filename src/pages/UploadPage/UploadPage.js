import './UploadPage.scss';
import React from 'react';
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
				<form>
					<div>
						<Thumbnail />
						<Details />
					</div>
					<Controls />
				</form>
			</>
		)
	}
}

