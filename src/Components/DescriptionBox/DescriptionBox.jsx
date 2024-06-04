import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorem, quis rem eius autem illo, consectetur sequi omnis impedit deleniti fugit, consequatur sed necessitatibus reiciendis alias placeat culpa. Sed, dolores.</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maxime laboriosam modi debitis voluptatum beatae quisquam obcaecati, explicabo accusamus placeat. Aperiam blanditiis architecto illo optio quibusdam in totam culpa voluptas.
            </p>
        </div>
    </div>
  )
}

export default DescriptionBox