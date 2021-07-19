import './VideoSection.scss';


export default function VideoSection(props){
	const infoData = props.mvList;

	return(
		
		<article className='video'>
			<video className='video__player' controls poster={infoData.image} id={infoData.id}></video>
			<div className='video__info'>
				<h1 className='video__title'>{infoData.title}</h1>
				<div className='video__bottom-wrapper'>
					<div className='video__author'>
						<p className='video__channel'>{infoData.channel}</p>
						<p className='video__date'>{props.converter(infoData.timestamp)}</p>
					</div>
					<div className='video__statistics'>
						<i className='video__views-icon'></i>
						<p className='video__views'>{infoData.views}</p>
						<i className='video__likes-icon'></i>
						<p className='video__likes'>{infoData.likes}</p>
					</div>
				</div>
			</div>
			<div className='video__description'>{infoData.description}</div>
		</article>
	);

}
