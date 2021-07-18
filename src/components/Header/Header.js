import './Header.scss';
import logoImg from '../../assets/images/Logo/Logo-brainflix.svg'

function Header(props){
	function clickHandler(e){
		props.method(e.target.id);
	}
	return(
			<header className='header'>
				<figure className='header__logo-container' onClick={clickHandler}>
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

export default Header;
