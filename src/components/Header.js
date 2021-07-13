function Header(){
	return(
			<header className='header'>
				<figure className='header__logo-container'>
					<img className='header__logo-container__logo' src='../assets/images/Logo/Logo-brainflix.svg' />
				</figure>
				<div className='header__action-container'>
					<form className='header__action-container__search-form'>
						<input className='header__action-container__search-form__input' placeholder='Search' />
					</form>
					<button className='btn header__action-container__btn'>UPLOAD</button>
					<figure className='header__action-container__dp-container'>
						<img className='header__action-container__dp-container' src='../assets/images/Mohan-muruge.jpg' />
					</figure>
				</div>
			</header>);
	};

export default Header;
