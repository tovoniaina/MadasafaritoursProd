import React from 'react'
import ImagePremium1 from '../images/Premium/Premium1.webp'
import ImagePremium2 from '../images/Premium/Premium2.webp'
import ImagePremium3 from '../images/Premium/Premium3.webp'
import ImagePremium4 from '../images/Premium/Premium4.webp'


function PremiumTours() {
    // $(document).ready(function() {
    //     var front = document.getElementsByClassName("front");
    //     var back = document.getElementsByClassName("back");

    //     var highest = 0;
    //     var absoluteSide = "";

    //     for (var i = 0; i < front.length; i++) {
    //       if (front[i].offsetHeight > back[i].offsetHeight) {
    //         if (front[i].offsetHeight > highest) {
    //           highest = front[i].offsetHeight;
    //           absoluteSide = ".front";
    //         }
    //       } else if (back[i].offsetHeight > highest) {
    //         highest = back[i].offsetHeight;
    //         absoluteSide = ".back";
    //       }
    //     }
    //     $(".front").css("height", highest);
    //     $(".back").css("height", highest);
    //     $(absoluteSide).css("position", "absolute");
    //   });
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div class="flip-card ">
                            <div class="flip-card-inner ">
                                <div class="flip-card-front PremiumCard1">
                                    <img src={ImagePremium1} alt="Avatar"/>
                                </div>
                                <div class="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div class="flip-card PremiumCard2">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={ImagePremium2} alt="Avatar"/>
                                </div>
                                <div class="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div class="flip-card PremiumCard3">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={ImagePremium3} alt="Avatar"/>
                                </div>
                                <div class="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div class="flip-card PremiumCard4">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img src={ImagePremium4} alt="Avatar"/>
                                </div>
                                <div class="flip-card-back">
                                    <h1>John Doe</h1>
                                    <p>Architect & Engineer</p>
                                    <p>We love that guy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default PremiumTours