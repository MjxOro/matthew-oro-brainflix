import './Thumbnail.scss'
import ThumbnailImg from '../../assets/images/Upload-video-preview.jpg'
export default function Thumbnail(props){
	return(
		<article className='thumbnail'>
			<h1 className='thumbnail__title'>Upload Video</h1>
			<label className='thumbnail__label'>VIDEO THUMBNAIL</label>
			<figure className='thumbnail__img-wrapper'>
				<img className='thumbnail__img' src={ThumbnailImg}/>
			</figure>
		</article>
	)
}
