import React, { useEffect, useState } from 'react'
import "./home.css"
import FeaturedPost from '../FeaturedPost/FeaturedPost'
import { FeaturedPosts } from "../../data/data"
import { CollectionPosts } from "../../data/data"
import { RecipePostSide } from "../../data/data"
import CurratedCollection from '../Collection/CurratedCollection'
import RecipePostsMain from '../Recipe/Recipe'
import RecipeSidePost from '../RecipeSidePost/RecipeSidePost'
import AboutUs from '../AboutUs/AboutUs'
import { client } from './../../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from "@sanity/block-content-to-react";


const Home = () => {
    const [post, setPost] = useState()

    useEffect(() => {
        client.fetch(
            `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
            _id,
            url
          },
        },  
        body,
      }`
        )
            .then((data) => setPost(data))
            .catch(console.error);
    }, []);

    const builder = imageUrlBuilder(client);

    function urlFor(source) {
        return builder.image(source);
    }


    return (
        <div div className='' >
            {console.log(post)}
            <div className='lg:px-44 lg:py-16 '>

                {/* First Section */}
                <div className='flex justify-between h-[78vh] '>
                    {FeaturedPosts.map((data, index) => {
                        return (
                            <FeaturedPost key={index} img={data.image} title={data.title} />
                        )
                    })}

                </div>
            </div>

            {/* Second Section  */}
            <AboutUs />
            {/* Third Section */}
            <div className='bg-gray-50 lg:px-44 lg:py-16'>
                <div className='flex flex-wrap justify-between'>
                    {CollectionPosts.map((data, index) => {
                        return (
                            <CurratedCollection key={index} img={data.image} title={data.title} />
                        )
                    })}

                </div>
            </div>
            {/* {Fourth Section } */}
            <div className='lg:px-44 lg:py-16'>
                <div className='grid grid-cols-12 gap-4'>
                    <div className='col-span-8'>
                        <p className='text-left font-bold text-2xl pb-8'>Latest Recipe</p>

                        <div>
                            {post && post.map((data, index) => {
                                return (
                                    <div>
                                        <RecipePostsMain key={index} title={data.title} img={data.mainImage.asset.url} description={<BlockContent
                                            blocks={data.body}

                                        />} />
                                    </div>
                                )
                            })}
                        </div>

                    </div>
                    <div className='col-span-4'>
                        <p className='text-left font-bold text-2xl pb-8'>Fresh Recipe</p>

                        {RecipePostSide.map((data, index) => {
                            return (
                                <div>
                                    <RecipeSidePost key={index} title={data.title} img={data.image} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home