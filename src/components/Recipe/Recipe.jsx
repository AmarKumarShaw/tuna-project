import React from 'react'

const RecipePostsMain = ({ img, title, description, avatarName, day, avatarImage }) => {

    return (
        <div className='border mb-4 cursor-pointer'>
            <div className='w-full'>
                <img className="w-full" src={img} alt={"alt_img"} />
            </div>
            <div className='p-3'>
                <div className='text-left p-2 py-6'>
                    <p className='font-bold text-md'>{title}</p>
                    <p className='text-base text-gray-500 font-normal leading-7 line-clamp-3'>{description}</p>
                </div>
                <div>
                    <div className='flex items-center justify-between px-2'>
                        <div className='flex'>
                            <img className='h-10 w-10 rounded-full' src={avatarImage} alt="avatarImage" />
                            <p className='px-4 flex items-center text-gray-500'>{avatarName}</p>
                        </div>
                        <div>
                            <p className='text-base text-gray-500'>{"Yesterday"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipePostsMain