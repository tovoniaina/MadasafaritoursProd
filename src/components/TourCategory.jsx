import React from 'react'
import QuizIcon from '@mui/icons-material/Quiz';
import Marojejy from '../images/marojejy.png'
import caroussel1 from "../images/Caroussel1.webp"
import caroussel2 from '../images/Caroussel2.webp'
import caroussel3 from '../images/Caroussel3.webp'
import caroussel4 from '../images/Slider4.webp'
import caroussel5 from '../images/Slider5.webp'

function TourCategory() {
  return (
    <div className="container">

      <div className="titre-faqs"><h1>The main region of tourism attraction in Madagascar</h1></div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
              <h5> <QuizIcon /> Is it safe to travel to Madagascar?</h5>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="row">
              <div className='col-lg-6 col-md-12 col-sm-12'>
                <div id="slideIndicators" className="carousel slideTours d-flex img-fluid" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#slideIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#slideIndicators" data-slide-to="1"></li>
                    <li data-target="#slideIndicators" data-slide-to="2"></li>
                  </ol>

                  <div className="carousel-inner">


                    <div className="carousel-item active">
                      <img className="d-block w-100" src={caroussel2} alt="First slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Lorem ipsum dolor, sit amet</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                      </div>
                    </div>


                    <div className="carousel-item">
                      <img className="d-block w-100" src={caroussel3} alt="Second slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Lorem ipsum dolor, sit amet</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                      </div>
                    </div>


                    <div className="carousel-item">
                      <img className="d-block w-100" src={caroussel1} alt="Third slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Lorem ipsum dolor, sit amet</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                      </div>
                    </div>



                    <div className="carousel-item">
                      <img className="d-block w-100" src={caroussel4} alt="Second slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Lorem ipsum dolor, sit amet</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>


                    <div className="carousel-item">
                      <img className="d-block w-100" src={caroussel5} alt="Second slide" />
                      <div className="carousel-caption d-none d-md-block">
                        <h1>Lorem ipsum dolor, sit amet</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>

                  </div>


                  <a className="carousel-control-prev" href="#slideIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#slideIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>


                </div>
              </div>


              <div className="accordion-body col-lg-6 col-md-12 col-sm-12">
                <p>Traveling to Madagascar grants you lots of opportunities despite misery and poverty. However, Malagasy people in general are very kind, friendly, and hospitable, welcoming, treating travelers well. In fact, Madagascar is one of the safest and friendliest countries to travel to.</p>
                <p>Like any other big cities though, there are some places where thieves, robbers, snatchers, pickpockets roam around in hope to find their victims. Thus, Madagascar Safari Tours strongly recommend the travelers to be aware and careful especially in big cities. They are advised to make sure and look after their own personal belongings, keep their valuables and money in separate places in case of loss or theft and ensure you’re not out alone at night. Besides, remember that this country is very poor, so people tend to commit petty theft, so avoid walk around flaunting jewelry or money.</p>
                <p>As far as animals are concerned, the country does not have any venomous snakes among its 80 species recorded. Crocs do not pose real threat. We recommend you listen to your guides and you remain safe till the end of your trip, bringing home pleasant and memorable tours.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              <h5> <QuizIcon /> Traveling in Madagascar looks like what?</h5>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">

            <div className="row">
              <div className="col col-lg-6 col-md-12 col-sm-12">
                <img src={Marojejy} className='d-flex img-fluid marojejy col-lg-6 col-md-12 col-sm-12' alt="marojejy" />
              </div>


              <div className="accordion-body col-lg-6 col-md-12 col-sm-12">
                <p>Road conditions, hotel infrastructures are far from the European standard. Domestic flights are commonly viewed as unreliable. Driving would be the best way to go around the country in spite of pot holes and dirt road covering the whole surface.</p>

                <p>Hiking in certain areas are very rewarding despite climate might be too hot, like the case in Isalo national park. Thus, bring much water, at least 1 liter and half.</p>

                <p>Besides, being a tropical climate area, many places are prone to malaria, bilharzia, and diarrhea. The recent fear of bubonic plague surely has a great negative impact on tourism holding back its economic growth while scaring lots of travelers who want to travel to Madagascar. In fact, such epidemic has not threatened the locals and has not yet claimed a gross death toll.</p>
              </div>

            </div>


          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              <h5><QuizIcon />What do Malagasy people eat as their main food staple?</h5>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <p>‘Ravitoto sy henakisoa’ is the most famous traditional food in Madagascar. It is translated as the smashed cassava leaves with pork. </p>
              <p>Also, garbanzo beans with pork, ‘romazava’ (soupy green leaves with beef broth) are among the most popular toppings. </p>
              <p>In fact, in every day to day life, Malagasy people take soupy rice with jerky meat for breakfast. Rice is heavily consumed three times a day, a culture influenced by the Indonesians.</p>
              <p>However, in most hotels, travelers are usually served with American continental for breakfast (tea, coffee, bread and jam). For lunch and dinner, especially in coastal areas, fresh seafood abound, fresh French fries and lots of beef and pork. Unfortunately, there are few choices for vegetarians. Omelet or spaghetti and sautéed vegetables are on offer with rice and noodles. We would be happy to get notified regarding your dietary requirements prior to departure in hope to let us best serve you during your trip.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFour">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
              <h5><QuizIcon />Is tap water safe to drink?</h5>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
            <div className="accordion-body">
              <p>The answer is NO. Tourists are strongly recommended to drink water from sealed water bottles, boiled water when bottled are not available in some rural areas. Besides, you can buy purification tablets or iodine to treat water during your travels, and vitamin C tablets are good for hiding the taste. When ordering lettuce, salad, please make sure that it has been washed using a water bottle and not tap water. Anyways, the vast majority of hotels usually use bottled water for their cuisine.</p>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingFive">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
              <h5><QuizIcon />What do Malagasy people drink?</h5>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
            <div className="accordion-body">
              <p>‘Ranon'ampango’ is the most preferred drinking water by all Malagasy people. It is burnt rice water stuck at the bottom of the cooking pot. </p>
              <p>Besides, Rhum is also considered as the most consumed home-made alcohol throughout the island. Also, THB meaning ‘Three Horses Beer’ is viewed as the vastly famous beer drunk by most Malagasy people. This is the most consumed beer in the country receiving international reward during the Oktoberfest in Germany!</p>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default TourCategory