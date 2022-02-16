import React from 'react'
import Wave from 'react-wavify'

const Footer = () => (
  <div className="wave">
<Wave fill="url(#gradient)">
  <defs>
    <linearGradient id="gradient" gradientTransform="rotate(90)">
      <stop offset="10%"  stopColor="#296c99" />
      <stop offset="90%" stopColor="#6ebff5" />
    </linearGradient>
  </defs>
</Wave>
  </div>
  
)

export default Footer