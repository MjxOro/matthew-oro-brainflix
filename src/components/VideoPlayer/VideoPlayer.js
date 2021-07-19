import './VideoPlayer.scss';

export default function VideoPlayer(props){
	return(
			<article className='video'>
				<video className='video__player' controls poster={props.data.image} id={props.data.id}></video>
			</article>

	);
}
