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
            <p>E-commerce, short for electronic commerce, refers to the buying and selling of goods or services using the internet, and the transfer of money and data to execute these transactions. It's essentially commerce, or business transactions, conducted electronically on the internet.</p>
        </div>
    </div>
  )
}

export default DescriptionBox