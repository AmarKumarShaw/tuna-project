import React from 'react'

const RecipePostsMain = ({ img, title, description, avatarName, day, avatarImage }) => {

    // useEffect(() => {
    //     sanityClient.fetch(`*[_type == "post"]{
    //             title,
    //             slug,
    //             mainImage{
    //                 _id,
    //                 url
    //             },
    //             alt
    //     }`).then((data) => setPost(data))
    //         .catch(console.error)
    // })

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
                        <div className='flex '>
                            <img src={avatarImage} alt="avatarImage" />
                            <p className='px-4 flex items-center'>{avatarName}</p>
                        </div>
                        <div>
                            <p className='text-base text-gray-500'>{day}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipePostsMain