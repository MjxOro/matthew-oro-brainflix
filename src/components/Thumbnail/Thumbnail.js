import './Thumbnail.scss'
import ThumbnailImg from '../../assets/images/Upload-video-preview.jpg'
export default function Thumbnail(props){
	return(
		<article className='thumbnail'>
			<label className='thumbnail__label'>VIDEO THUMBNAIL</label>
			<figure className='thumbnail__img-wrapper'>
				<img className='thumbnail__img' src={ThumbnailImg} alt='Upload Thumbnail'/>
			</figure>
		</article>
	)
}
