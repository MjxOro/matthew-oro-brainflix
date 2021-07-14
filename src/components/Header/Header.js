function Header(){
	return(
			<header className='header'>
				<figure className='header__logo-container'>
					<img className='header__logo' src='../assets/images/Logo/Logo-brainflix.svg' />
				</figure>
				<div className='header__container'>
					<form className='header__form'>
						<input className='header__input' placeholder='Search' />
					</form>
					<button className='btn header__btn'>UPLOAD</button>
					<figure className='header__profile-picture-container'>
						<img className='header__profile-picture' src='../assets/images/Mohan-muruge.jpg' />
					</figure>
				</div>
			</header>);
	};

export default Header;
