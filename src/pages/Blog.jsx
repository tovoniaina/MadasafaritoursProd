import React, { Component } from 'react'
import AllPosts from '../components/Blog/AllPosts';
import OnePost from '../components/Blog/OnePost';

export class Blog extends Component {
  render() {
    return (
     <main id='blog'>
        <AllPosts/>
        <OnePost />

     </main>
    )
  }
}

export default Blog