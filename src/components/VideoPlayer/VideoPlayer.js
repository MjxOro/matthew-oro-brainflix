import './VideoPlayer.scss';

export default function VideoPlayer({data}){
	return(
			<article className='video'>
				<video className='video__player' controls poster={data.image} id={data.id}></video>
			</article>

	);
}
