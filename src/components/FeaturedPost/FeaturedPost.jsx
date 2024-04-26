import React from 'react'
import "./FeaturedPost.css"

const FeaturedPost = ({ img, title }) => {
    return (
        <div className='cursor-pointer'>
            <img className="custom-image" src={img} alt="food_img" />
            <div className='flex py-3 px-3'>
                <img className="mr-2" src="./images/Star_1.png" alt="star_img" />
                <img className="mr-2" src="./images/Star_1.png" alt="star_img" />
                <img className="mr-2" src="./images/Star_1.png" alt="star_img" />
                <img className="mr-2" src="./images/Star_1.png" alt="star_img" />
                <img className="mr-2" src="./images/Star_5.png" alt="star_img" />
            </div>
            <div className='flex py-3 px-3'>
                <p className='font-bold'>{title}</p>
            </div>
        </div>
    )
}

export default FeaturedPost