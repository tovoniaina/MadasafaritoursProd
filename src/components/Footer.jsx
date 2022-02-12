import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import backgroundImg from '../images/curve-bg-footer.svg'

function Footer() {
    return (

        <div className='row footer'>
            <img className='d-flex' src={backgroundImg} alt="img"/> 
            <div className="col-lg-4 col-md-6 col-sm-12 tongotra">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officiis quisquam sequi nisi praesentium ad dolores non, ullam perspiciatis ratione provident maxime corrupti obcaecati quae aperiam inventore unde impedit id!</p>
            </div>

            <div className="col-lg-4  col-md-6 col-sm-12 tongotra">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officiis quisquam sequi nisi praesentium ad dolores non, ullam perspiciatis ratione provident maxime corrupti obcaecati quae aperiam inventore unde impedit id!</p>
            </div>

            <div className="col-lg-4  col-md-6 col-sm-12 tongotra">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque officiis quisquam sequi nisi praesentium ad dolores non, ullam perspiciatis ratione provident maxime corrupti obcaecati quae aperiam inventore unde impedit id!</p>
            </div>
        </div>
        

    


    )
}

export default Footer

