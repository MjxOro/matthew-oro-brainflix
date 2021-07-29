import './VideoSection.scss';
import Comments from '../Comments/Comments';
import { DateConverter } from '../../javascriptHelper';


export default function VideoSection({data , handler, deleteClick, checkErr}){
	return(
		<article className='video-info'>
			<div className='video-info__wrapper'>
				<h1 className='video-info__title'>{data.title}</h1>
				<div className='video-info__bottom-wrapper'>
					<div className='video-info__author'>
						<h3 className='video-info__channel'>by {data.channel}</h3>
						<p className='video-info__date'>{DateConverter(data.timestamp)}</p>
					</div>
					<div className='video-info__statistics'>
						<i className='video-info__views-icon'></i>
						<p className='video-info__views'>{data.views}</p>
						<i className='video-info__likes-icon'></i>
						<p className='video-info__likes'>{data.likes}</p>
					</div>
				</div>
			</div>
			<div className='video-info__description'>{data.description}</div>
			<Comments key={data.id} data={data} checkErr={checkErr} handler={handler} deleteClick={deleteClick}/>
		</article>
	);

}
