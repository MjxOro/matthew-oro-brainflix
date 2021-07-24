import './Details.scss'

export default function Details(props){
	return(
		<section className='details'>
			<label className='details__label'>TITLE YOUR VIDEO</label>
			<input placeholder='Add a title to your video' className='details__input'></input>
			<label className='details__label'>ADD A VIDEO DESCRIPTION</label>
			<textarea placeholder='Add a title to your video' className='details__textarea'></textarea>
		</section>
	);
}
