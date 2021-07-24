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

