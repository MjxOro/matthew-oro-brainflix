import React from 'react';
import './Header.scss';
import logoImg from '../../assets/images/Logo/Logo-brainflix.svg'
import profilePicture from '../../assets/images/Mohan-muruge.jpg';

class Header extends React.Component{
	state = {
		counter: 0,
	};
render = ()=>{
	return(
			<header className='header'>
				<figure className='header__logo-container'>
					<img className='header__logo' src={logoImg} alt='BrainFlix Logo' />
				</figure>
				<div className='header__form-container'>
					<form className='header__form'>
						<input className='header__input' placeholder='Search' />
					</form>
					<button className='btn header__btn'>UPLOAD</button>
					<figure className='header__figure'>
						<img className='header__profile-picture' src={profilePicture} alt='User Profile-picture' />
					</figure>
				</div>
			</header>);
	};
};

export default Header;
