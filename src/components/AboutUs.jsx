import React, { useEffect, useState } from "react";
// import ImageSection1 from '../images/marojejy.png'
// import { useParams } from "react-router-dom";
import sanityClient from "../../src/client";
// import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";



export default function AboutUs() {
    const [allPostsData, setAllPosts] = useState(null);
    const builder = imageUrlBuilder(sanityClient);
    function urlFor(source) {
      return builder.image(source);
    }

    useEffect(() => {
        sanityClient
          .fetch(
            `*[_type == "picturesAboutUs" && _id == 'f2a68683-6e96-488c-8cbb-6c1c529c7907']{
                _id,
                image{
                    asset->{
                        _id,
                        url,
                            }
            }
            }
            `)
            .then((data) => setAllPosts(data))
            .catch(console.error);
    }, []);
    // console.log(allPostsData)

    return (
        <div className='container'>
         {allPostsData &&
              allPostsData.map((post, index) => (
<section id="AproposSection1" className="my-3" key={index}>
            <div className="row my-2">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <h4 className="text-center">Why Choose Us</h4>
                    <p className="text-justify">
                        <p>Madagascar Travelia Safari is more than just a tour company. Our passion is to providing lasting memories in Madagascar through extraordinary trips and vivid experiences.</p>
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="hovereffect">
                        <img className="img-responsive img-fluid" src={urlFor(post.image).url()} alt="img1" />

                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="AproposSection">Perfect knowledge of Madagascar</h4>
                            <p className="text-justify">
                                Our teams are 100% Malagasy locally-born tour guides, having solid knowledge and sound expertise in all destinations, creating tailor-made itineraries suitable to your demand/wish that offer unique opportunities to connect with a local culture and people.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h4 className="AproposSection">Sustainability Tourism</h4>
                            <p className="text-justify">
                                We pursue sustainable tourism respecting the environment, preserving and sustaining the local communities’ way of life. Our trips are all thoughtfully designed to guide you in your own unique discovery of Madagascar exotics.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h4 className="AproposSection">Flexible offer</h4>
                            <p className="text-justify">
                                Wherever place you want to find in Madagascar, we can help you find it; whatever trip you have in mind, we can help you shape it.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
              ))}
            
      
            
        </div>
    )
}

