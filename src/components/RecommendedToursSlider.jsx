import React from 'react'
import { Helmet } from "react-helmet";


function RecommendedToursSlider() {

  return (
    <div className='elfsightWidget'>
      <Helmet>
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
      </Helmet>
      <div class="elfsight-app-f2b71d9c-537e-4661-b9d3-eaffb030b3f3"></div>
    </div>
  )
}

export default RecommendedToursSlider