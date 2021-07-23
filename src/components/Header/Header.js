import './Header.scss';
import logoImg from '../../assets/images/Logo/Logo-brainflix.svg'
import { Link } from 'react-router-dom'

function Header(){
	return(
			<header className='header'>
				<Link to='/' className='header__logo-link'>
					<figure className='header__logo-container' >
							<img className='header__logo' src={logoImg} alt='BrainFlix Logo' />
					</figure>
				</Link>
				<div className='header__form-container'>
					  <input className='header__input' placeholder='Search' />
						<div className='header__wrapper'>
							<button className='header__btn'>
								<i className='header__btn-icon'></i>
								UPLOAD
							</button>
							<figure className='header__profile-picture'></figure>
						</div>
				</div>
			</header>);
};

export default Header;
