import './VideoPlayer.scss';

export default function VideoPlayer({data,match}){
	
	return(
			<article className='video'>
				<video  key={match.params.id === data.id? data.id : data.id} className='video__player' controls poster={data.image} id={data.id}>
					<source className='video__source' src={data.video + '/' + '?api_key=1234'} type='video/mp4' />
				</video>
			</article>

	);
	
}
