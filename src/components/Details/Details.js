import './Details.scss'

export default function Details(props){
	return(
		<section clasName='details'>
			<div className='details__info-wrapper'>
				<label className='details__label'></label>
				<input className='details__input'></input>
				<label className='details__label'></label>
				<textarea className='details__textarea'></textarea>
			</div>
		</section>
	);
}
