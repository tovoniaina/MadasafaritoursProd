import React from 'react'
import caroussel1 from '../images/Caroussel1.jpg'
import caroussel2 from '../images/Caroussel2.jpg'
import caroussel3 from '../images/Caroussel3.png'

function Slider() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img className="d-block w-100" src={caroussel2} alt="First slide"/>
        <div className="carousel-caption d-none d-md-block">
    <h1>Lorem ipsum dolor, sit amet</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={caroussel3} alt="Second slide"/>
        <div className="carousel-caption d-none d-md-block">
    <h1>Lorem ipsum dolor, sit amet</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
      </div>
      <div className="carousel-item">
        <img className="d-block w-100" src={caroussel1} alt="Third slide"/>
        <div className="carousel-caption d-none d-md-block">
    <h1>Lorem ipsum dolor, sit amet</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>

  
  </div>
  )
}

export default Slider