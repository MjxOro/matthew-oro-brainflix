import './Comments.scss';
import { DateConverter,SortTimestamp } from '../../javascriptHelper';


export default function Comments({data,handler,deleteClick}){
	let comment = data.comments
	return(
		<section className='comment'>
			<h3 className='comment__header'>{(comment.length) + ' Comments'}</h3>
			<p className='comment__title'>JOIN THE CONVERSATION</p>
			<div className='comment__post-wrapper'>
				<div className='comment__profile-picture comment__profile-picture--Mohan'></div>
				<div className='comment__form-wrapper'>
					<form onSubmit={handler} className='comment__form'>
						<textarea name='postComment' placeholder='Write comment here' className='comment__input'></textarea>
						<button className='comment__btn'>COMMENT</button>
					</form>
				</div>
			</div>
			{
				comment.sort(SortTimestamp).map((elem,index) =>{
					return(
						<form onSubmit={deleteClick} className='comment__form-delete'>
							<div  className='comment__posted-wrapper' id={elem.id}>	
						{ elem.timestamp>(1609488000*1000) ? <div className='comment__profile-picture comment__profile-picture--Mohan'></div> : <div className='comment__profile-picture'></div>}
								<div className='comment__info-wrapper'>
									<div className='comment__top-wrapper'>
										<h3 className='comment__username'>{elem.name}</h3>
										<p className='comment__date'>{DateConverter(elem.timestamp)}</p>
									</div>
									<p className='comment__comment-post'>{elem.comment}</p>
								</div>
							</div>
							<button  className='comment__delete'></button>
							</form>
						);
					})
			}
		</section>
	);
}
