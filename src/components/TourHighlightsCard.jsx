import React from 'react'
import { Send } from '@mui/icons-material';
import ImageSection1 from '../images/marojejy.png'




function TourHighlightsCard() {
    return (
        <div className="Services my-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 my-2" >
                        <div class="card">
                            <div class="card-body">
                                <div className="card-icons text-center my-3">

                                </div>
                                <h3 className="card-title text-center">Devéloppement web</h3>
                                <div className='imageCard'><img src={ImageSection1} alt="" className='' /></div>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content.

                                </p>
                                <div className="text-center">
                                    <button type="button" class="bouton-expertise"><a href="ok">En Savoir Plus <Send /></a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-icons text-center my-3">

                                </div>

                                <h3 className="card-title text-center">SEO</h3>
                                <p className="card-text">With supporting text below as a natural lead-in to additional content text below as a natural lead-in to additional content.</p>
                                <div className="text-center">
                                    <button type="button" class="bouton-expertise"><a href="ok">En Savoir Plus <Send /></a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 my-2">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-icons text-center my-3">

                                </div>
                                <h3 className="card-title text-center">Advertising</h3>
                                <p className="card-text">With to additional content. supporting text below as a natural to additional content. lead-in to additional content text below as a.</p>
                                <div className="text-center">
                                    <button type="button" class="bouton-expertise"><a href="ok">En Savoir Plus <Send /></a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default TourHighlightsCard
