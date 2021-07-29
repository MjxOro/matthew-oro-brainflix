import './VideoPlayer.scss';
import { ApiKey } from '../../apiKey'

export default function VideoPlayer({data,match,resetVideoRef}){
	const apiVideo = data.video + '/' + ApiKey
	let VideoPlayerRef = null;
	
	return(
			<article className='video'>
				<video  key={match.params.id === data.id? data.id : data.id} className='video__player' controls poster={data.image} id={data.id}>
					<source className='video__source' src={data.video + '/' + ApiKey} type='video/mp4' />
				</video>
			</article>

	);
	
}
