import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';

export class Blog extends Component {
  render() {
    return (
     <main id='blog'>
        <Outlet/>
     </main>
    )
  }
}

export default Blog