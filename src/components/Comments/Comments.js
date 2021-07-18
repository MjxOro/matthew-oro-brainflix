import './Comments.scss';

export default function Comments(props){
	const converter = props.dConverter;
	const commentData = props.cmList.comments;
	return(
		<section className='comment'>
			<h2 className='comment__header'>{String(commentData.length)} Comments</h2>
			<p className='comment__title'>JOIN THE CONVRSATION</p>
			<div className='comment__post-wrapper'>
				<div className='comment__profile-picture comment__profile-picture--Mohan'></div>
				<div className='comment__form-wrapper'>
					<form className='comment__form'>
						<textarea placeholder='Write comment here' className='comment__input'></textarea>
						<button className='comment__btn'>COMMENT</button>
					</form>
				</div>
			</div>
			{
				commentData.map(elem =>{
					return(
						<div className='comment__posted-wrapper' id={elem.id}>	
							<div className='comment__profile-picture'></div>
							<div className='comment__info-wrapper'>
								<div className='comment__top-wrapper'>
									<p className='comment__username'>{elem.name}</p>
									<p className='comment__date'>{converter(elem.timestamp)}</p>
								</div>
								<p className='comment__comment-post'>{elem.comment}</p>
							</div>
						</div>
					);
				})
			}
		</section>
	);
}
