import './VideoList.scss';

export default function VideoList(props){
	function clickHandler(e){
		props.switcher(e.currentTarget.id);
		window.scrollTo(0,0);
	}
	let filteredId = props.vList[props.elemNum].id;
	let videoArray = props.vList.filter(elem=>{
		return elem.id!==filteredId
	});
	return(
		<section className='list'>
			<h2 className='list__title'>NEXT VIDEO</h2>
		{
			videoArray.map(elem=>{
				return(
					<div className='list__videos-wrapper' id={elem.id} onClick={clickHandler} name='videoList'>
						<img className='list__videos' src={elem.image}/>
						<div className='list__text-wrapper'>
							<h2 className='list__video-title'>{elem.title}</h2>
							<p className='list__author'>{elem.channel}</p>
						</div>
					</div>


					
				);
			})





		}

		</section>
	)
}
