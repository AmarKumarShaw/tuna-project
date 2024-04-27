import React, { useEffect, useState } from "react";
import sanityClient from "./../../client";
import { Link } from "react-router-dom";

const RecipePostsMain = ({
  img,
  title,
  description,
  avatarName,
  day,
  avatarImage,
}) => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    _id,
                    url
                },
                alt
        }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  });

  return (
    <div className="border mb-4 cursor-pointer">
      {postData.map((post, index) => {
        return (
          <div key={post.slug.current}>
            <Link to={"/post/" + post.slug.current}>
              <div>
                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
              </div>
              <div className="p-3">
                <div className="text-left p-2 py-6">
                  <p className="font-bold text-md">{post.title}</p>
                  <p className="text-base text-gray-500 font-normal leading-7">
                    {description}
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-between px-2">
                    <div className="flex ">
                      <img src={avatarImage} alt="avatarImage" />
                      <p className="px-4 flex items-center">{avatarName}</p>
                    </div>
                    <div>
                      <p className="text-base text-gray-500">{day}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default RecipePostsMain;
