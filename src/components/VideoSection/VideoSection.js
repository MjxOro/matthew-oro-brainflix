import './VideoSection.scss';
import Comments from '../Comments/Comments';


export default function VideoSection(props){
	const infoData = props.mvList;

	return(
		
		<article className='video-info'>
			<div className='video-info__wrapper'>
				<h1 className='video-info__title'>{infoData.title}</h1>
				<div className='video-info__bottom-wrapper'>
					<div className='video-info__author'>
						<h3 className='video-info__channel'>by {infoData.channel}</h3>
						<p className='video-info__date'>{props.converter(infoData.timestamp)}</p>
					</div>
					<div className='video-info__statistics'>
						<i className='video-info__views-icon'></i>
						<p className='video-info__views'>{infoData.views}</p>
						<i className='video-info__likes-icon'></i>
						<p className='video-info__likes'>{infoData.likes}</p>
					</div>
				</div>
			</div>
			<div className='video-info__description'>{infoData.description}</div>
			<Comments key={infoData.id} cmList={infoData} dConverter={props.converter}/>
		</article>
	);

}
