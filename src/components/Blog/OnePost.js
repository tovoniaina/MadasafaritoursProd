// src/component/OnePost.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import "./Index.css";
import SocialMediaShare from "./SocialMediaShare";

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
          <div className="headBlog badeauParent absolute h-full w-full flex items-center justify-center p-8">
            {/* Title Section */}
            <div className=" bandeauTransparent bg-white bg-opacity-75 rounded px-5 py-5">
              <h2 className="text-3xl lg:text-6xl text-center mb-4">{postData.title}</h2>
              <div className="blocAuthor">
                <img
                  src={urlFor(postData.authorImage).url()}
                  className="saryAuteur"
                  alt="Author is Kap"
                />
                <h6 className="px-2">
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
        <div className="blogDescription">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>

      <SocialMediaShare/>
    </div>
  );
}
