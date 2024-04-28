import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { client } from '../../client';
import imageUrlBuilder from '@sanity/image-url'
import SanityBlockContent from '@sanity/block-content-to-react';

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const builder = imageUrlBuilder(client)


  function urlFor(source) {
    return builder.image(source)
  }

  useEffect(() => {
    client.fetch(`*[_type == "post" && slug.current == "${postId}"][0]`).then((data) => {
      if (data && data.slug && data.slug.current === postId) {
        setPost([data]);
      }
      else {
        console.log("Post Not Found")
      }
    });
  }, [postId]);

  return (
    <div className='px-40'>
      {console.log(postId)}
      {console.log(post, 2)}
      {post && post.map((data, index) => {
        return (
          <div key={index}>
            {console.log(data)}
            <div className='flex flex-col items-center py-4'>
              <img src={urlFor(data.mainImage.asset._ref).url()} alt="post_alt" />
            </div>
            <div >
              <div className=''><p className='flex font-bold text-left text-xl py-4'>{data.title}</p></div>
              <div className='py-4 mb-4'>
                <p className='font-normal bg-gray-200 p-4 px-12 text-start'>
                  <SanityBlockContent
                    blocks={data.body}
                  />
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SinglePost