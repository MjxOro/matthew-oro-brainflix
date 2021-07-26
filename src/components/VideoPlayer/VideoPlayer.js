import './VideoPlayer.scss';
import { ApiKey } from '../../apiKey'

export default function VideoPlayer({data}){
	return(
			<article className='video'>
				<video  className='video__player' controls poster={data.image} id={data.id}>
					<source className='video__source' src={data.video + '/' + ApiKey} type='video/mp4' />
				</video>
			</article>

	);
}
