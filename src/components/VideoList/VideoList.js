import './VideoList.scss';
import { Link } from 'react-router-dom';
import { ArrayFilterList } from '../../javascriptHelper';

export default function VideoList(props){
	const list = ArrayFilterList(props.data,props.currentId)
	return(
		<section className='list'>
			<h5 className='list__title'>NEXT VIDEO</h5>
		{
			list.map(elem=>{
				return(
					<Link to={''+ elem.id} className='list__link'>
					<div className='list__videos-wrapper' id={elem.id}  name='videoList'>
						<img className='list__videos' src={elem.image}/>
						<div className='list__text-wrapper'>
							<h3 className='list__video-title'>{elem.title}</h3>
							<p className='list__author'>{elem.channel}</p>
						</div>
					</div>
					</Link>


					
				);
			})





		}

		</section>
	)
}
