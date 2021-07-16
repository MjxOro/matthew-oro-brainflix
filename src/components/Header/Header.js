import './Header.scss';
import React from 'react';
import logoImg from '../../assets/images/Logo/Logo-brainflix.svg'

class Header extends React.Component{
	state = {
		counter: 0,
	};
render = ()=>{
	return(
			<header className='header'>
				<figure className='header__logo-container'>
					<a href='#' className='header__logo-link'>
						<img className='header__logo' src={logoImg} alt='BrainFlix Logo' />
					</a>
				</figure>
				<div className='header__form-container'>
					<form className='header__form'>
						<input className='header__input' placeholder='Search' />
						<div className='header__wrapper'>
							<button className='header__btn'>
								<i className='header__btn-icon'></i>
								UPLOAD
							</button>
							<figure className='header__profile-picture'></figure>
						</div>
					</form>
				</div>
			</header>);
	};
};

export default Header;
