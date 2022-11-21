// src/component/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import "./Index.css";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
           title,
           slug,
           mainImage{
           asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
       }`
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading... </div>;

  return (
    <div className="py-5">
      <div className="container shadow-lg blockDetails rounded-lg py-3 px-3 ">
        <div className="transparentCover ">
          <div className="headBlog absolute h-full w-full flex items-center justify-center p-8">
            {/* Title Section */}
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="text-3xl lg:text-6xl mb-4">{postData.title}</h2>
              <div className=" w-100  flex justify-center text-gray-800">
                <img
                  src={urlFor(postData.authorImage).url()}
                  className="saryAuteur"
                  alt="Author is Kap"
                />
                <h6 className="flex items-center py-2 pl-2 text-xl">
                  {postData.name}
                </h6>
              </div>
            </div>
          </div>
          <img
            className=" rounded coverPicBlog"
            src={urlFor(postData.mainImage).url()}
            alt="author"
          />
        </div>
        <div className="px-16 lg:px-24 py-8 lg:py-16 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
}
