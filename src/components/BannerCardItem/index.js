// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {bannerList} = props
  const {headText, description, className} = bannerList
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headText}</h1>
        <p className="paragraph">{description}</p>
        <button className="button" type="button">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
