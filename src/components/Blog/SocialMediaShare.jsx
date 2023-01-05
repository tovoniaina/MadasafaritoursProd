import React from 'react'
import { Container, Segment} from "semantic-ui-react"
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton,WhatsappShareButton } from "react-share";
import {FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon} from "react-share";

function SocialMediaShare() {
  return (
    <div>
        <div className='container my-3'><h4>Share this blog post on:</h4></div>
        <Container>
            <Segment>
                <FacebookShareButton
                    url={window.location.href}
                    // url='https://www.traveliasafari.com/blog'
                    description='Let discover Travelia Safari Blog posts'
                    hashtag='#Travelia_safari'
                    
                >
                    <FacebookIcon size={40} logoFillColor = 'white' round={true}></FacebookIcon>
                </FacebookShareButton>

                <TwitterShareButton 
                    className='mx-2' 
                    title='Let discover Travelia Safari Blog posts'
                    url={window.location.href}
                    // url='https://www.traveliasafari.com/blog'
                    quote={'Let discover Travelia Safari Blog posts'}
                    hashtag='#Travelia_safari'
                    
                >
                    <TwitterIcon size={40} logoFillColor = 'white' round={true}></TwitterIcon>
                </TwitterShareButton>

                <LinkedinShareButton 
                    // className='mx-2' 
                     url={window.location.href}
                    // url='https://www.traveliasafari.com/blog'
                    title='Travelia Safari blog'
                    summary='Let discover Travelia Safari Blog posts'
                    hashtag='#Travelia_safari'
                    
                >
                    <LinkedinIcon size={40} logoFillColor = 'white' round={true}></LinkedinIcon>
                </LinkedinShareButton>

                <WhatsappShareButton 
                    className='mx-2' 
                    url={window.location.href}
                    title= "Let discover Travelia Safari Blog posts"
                    separator= " :: "
                    
                >
                    <WhatsappIcon size={40} logoFillColor = 'white' round={true}></WhatsappIcon>
                </WhatsappShareButton>

            </Segment>
        </Container>
    </div>
  )
}

export default SocialMediaShare