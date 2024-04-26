import React from 'react'
import "./CurratedCollection.css"

const CuratedCollection = ({ img, title }) => {
    return (
        <div className='py-6 cursor-pointer'>
            <div>
                <img className="collection-custom-image" src={img} alt="food_img" />
                <div className='flex py-3'>
                    <p className='font-bold text-left'>{title}</p>
                </div>
                <button className='flex border border-red-500 text-red-500 text-left p-2 text-sm hover:bg-red-500 hover:text-white curosr-pointer'>150 Recipe</button>
            </div >
        </div >
    )
}

export default CuratedCollection