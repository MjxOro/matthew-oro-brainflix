import './VideoSection.scss';


export default function VideoSection(props){
	const infoData = props.mvList[0];
	return(
		
		<article className='video'>
			<video className='video__player'  id={infoData.id} poster={infoData.image}>
			<div className='video__control-wrapper'>
				<button className='video__play'></button>
				<progress className='video__length'></progress>
				<div className="video__icon-wrapper">
					<i className='video__fullscreen'></i>
					<i className='video__sound'></i>
				</div>
			</div>
			</video>
			<div className='video__info'>
				<h1 className='video__title'>{infoData.title}</h1>
				<div className='video__author'>
					<p className='video__channel'>{infoData.channel}</p>
					<p className='video__date'>{infoData.date}</p>
				</div>
				<div className='video__statistics'>
					<p className='video__views'>{infoData.views}</p>
					<p className='video__likes'>{infoData.likes}</p>
				</div>
			</div>
			<div className='video__description'>{infoData.description}</div>
			
		</article>
	);

}
