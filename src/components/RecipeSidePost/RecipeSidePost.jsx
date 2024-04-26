import React from 'react'
import "./RecipeSidePost.css"

const RecipeSidePost = ({ img, title }) => {
    return (
        <div className='cursor-pointer'>
            <div>
                <img src={img} alt="recipe_img" />
            </div>
            <div className='py-3'>
                <div className='text-left py-2'>
                    <p className='font-medium text-md'>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default RecipeSidePost