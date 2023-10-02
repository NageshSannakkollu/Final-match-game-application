import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, matchThumbnailImage} = props
  const {thumbnailUrl, id} = imageDetails

  const clickOnThumbnail = () => {
    matchThumbnailImage(id)
  }

  return (
    <li>
      <button
        type="button"
        className="thumbnail-button"
        onClick={clickOnThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default ThumbnailItem
