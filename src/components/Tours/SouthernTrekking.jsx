import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import Button from '@mui/material/Button';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import GroupsIcon from '@mui/icons-material/Groups';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { Link } from "react-router-dom";


function SouthernTrekking() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>Southern Trekking itinerary</h1>
      <div className="row">
        <div className="col price-itinerary"><Button className='BtnBookNow ' variant="contained"><MonetizationOnIcon /> Price 584$</Button> </div>
        <div className="col"> <Button variant="contained" className='BtnBookNow' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><EventAvailableIcon /> BOOK NOW</Button></div>
      </div>

      <hr />
      <div className='row text-center '>
        <div className="col"><span className="badge text-dark"> <MyLocationIcon />East</span></div>
        <div className="col"> <span className="badge text-dark"><AvTimerIcon /> 4 Days</span> </div>
        <div className="col"><span className="badge text-dark"><MonetizationOnIcon /> From $450/person</span></div>
        <div className="col"><span className="badge text-dark"><GroupsIcon /> 4 persons</span></div>
      </div>
      <hr />
      
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 1"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', borderBlockColor: '#000' }}
          icon={<FlightLandIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA (ARRIVAL)</h3>
          <p className='text-justify'>
          Upon arrival at Ivato international airport, you will be met by a representative of our company who shall welcome you at the Hall. And then you will be transferred to your hotel located downtown. <br /> Overnight: Brajas Hotel
          </p>


        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 2"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA – AMBOSITRA</h3>
          <p className='text-justify'>
          Today you depart southwards to Ambositra passing by Antsirabe. Throughout the day you pass through a variety of highland scenery with an optional stop at Ambatolampy to see aluminium pot casting. When arriving in Antsirabe, drive southwards heading to Manandona where you start the hike visiting some rural traditional villages, some workshops, old palace while contemplating magnificent landscape. After the trekking, back to the car and then continue to Ambositra. Ambositra is the center of woodcarvings. Visit some shops for souvenirs. <br /> Overnight: Artisan hotel
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 3"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">AMBOSITRA – ANTOETRA</h3>
          <p className='text-justify'>
          After breakfast, depart to Antoetra, taking approximately two hours. Arriving, you shall start the trekking along the mountainous trails. The visit will be focused on some local traditional houses in hope to learn about their cultures and their daily life. Besides, when reaching Ifasina, home of the Zafimaniry tribe, this place will show you the value of their architecture, their beliefs and cultures. And then, return to your car taking you to your hotel. <br /> Overnight: Sous le Soleil
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 4"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANTOETRA – RANOMAFANA</h3>
          <p className='text-justify'>
          This morning, we set off to Ranomafana national park. Stop en route contemplating amazing landscapes, taking photo, and then a stop at Namorona waterfall. <br /> Overnight: Karibo hotel
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 5"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">RANOMAFANA VISIT – FIANARANTSOA</h3>
          <p className='text-justify'>
          We delve into the forest in search of endemic animals such as birds, reptiles, lemurs and plants. Ranomafana is the home of the rare and endangered Golden bamboo lemur, Greater bamboo lemur, Milne Edward’s lemur, Eastern bamboo lemurs and other animals like the eerie satanic leaf-tailed gecko, ring-tailed mangoose and many more. After the visit, we depart to Fianarantsoa, the capital of the Betsileo tribe. <br /> Overnight: Zomatel
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 6"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">FIANARANTSOA – ANDRINGITRA</h3>
          <p className='text-justify'>
          This morning, we leave Fianarantsoa departing southwards to Ambalavao, famous for its paper fabric, weaving, zebu market and Anja reserve. We visit this reserve home of the ring-tail lemurs. After the visit, we continue driving towards Andringitra national park. <br /> Overnight: Gite d’Andringitra
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 7"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANDRINGITRA</h3>
          <p className='text-justify'>
          This day is the start of our trekking, following the Diavolana hike that unveils the real beauty of Andringitra national Park; also, it is called the moon landscape due to its view on rock formation and landscape. Camping on full board
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 8"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANDRINGITRA</h3>
          <p className='text-justify'>
          We leave in the morning around 8 a.m. hiking further high reaching the ‘Pic Bobby’, second highest peak in Madagascar, offering a superb view and a breathtaking panorama on smooth granite blocks dominated by nice landscape of terraced rice paddies of the Betsileo tribe. After lunch, hike down leading to the camping site. Camping on full board
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 9"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANDRINGITRA – TSARANORO	</h3>
          <p className='text-justify'>
          Today, after breakfast, we are hiking down to Tsaranoro valley. We shall have the chance to enjoy the landscape in this area. Ring-tails and many other animals make home in this park. We cross some local villages contemplating majestic mountains of Tsaranoro. <br /> Overnight: Camp Catta
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 10"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">TSARANORO – ISALO </h3>
          <p className='text-justify'>
          We leave Tsaranoro departing southwards to Isalo national park. The landscape changes into more savanna and grassland. You shall reach Ranohira, the village close to the park late in the afternoon and then settle in your hotel. <br /> Overnight: H1 Hotel
                    </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 11"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ISALO VISIT</h3>
          <p className='text-justify'>
          We start the hike following the trail that unveils impressive canyons. The trekking leads to the famous “La Piscine Naturelle”, a natural swimming pool fed by crystal clear streams. You can spend few moments to refresh (do not forget your swimming gear if tempted). Then, we continue our hike following the “Namaza trail”, leading to the camping site where three species of lemurs (the browns, the ring-tails and the dancing sifakas) drop by expecting food and come for drink. <br /> Overnight: H1 Hotel
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 12"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ISALO – IFATY</h3>
          <p className='text-justify'>
          After breakfast, we drive to Tuléar, the capital of the Vezo fishing people. On our way, we pass by many villages formed by the sapphire rush. Besides, the famous Mahafaly tombs and Baobab trees abound all along the way between Sakaraha and Tuléar. The Mahafaly tombs have distinct cultural traits of this typical southern tribe, whose tombs display images that represent the daily life or dreams of the deceased. We shall have lunch in Tuléar and then continue driving to Ifaty. <br /> Overnight: Belle Vue
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 13"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">IFATY</h3>
          <p className='text-justify'>
          You have full day at leisure during your whole stay in Ifaty. However, some activities can be arranged by your hotel, on your charge. Ifaty grants you a relaxing place by the beach where you can go diving, snorkeling, take a dugout canoe ride with the Vezo fishermen. Besides, Ifaty spiny forest abounded by extraordinary vegetation of euphorbia, didieracea, and aloes is another important place to see the giant baobabs, the nocturnal southern sportive lemurs, some endemic birds like the Sub-desert mesite, the Running coua found nowhere else. <br /> Overnight: Belle Vue
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 14"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}

        >
          <h3 className="vertical-timeline-element-title">IFATY – TANA</h3>
          <p className='text-justify'>
          Depart back to Tuléar and then transfer to the airport for flight taking you to Tana. And then, upon arrival, you will be transferred to your hotel. <br /> Overnight: Brajas Hotel
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 15"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA – ANDASIBE</h3>
          <p className='text-justify'>
          Set off east to Andasibe Reserve passing through highland scenery and rice paddies. Along the journey, you will enjoy various sceneries from highlands to rice fields and small cluttered traditional villages mostly perched on hill sides. The road is steep and winding; with lush vegetation until you reach Andasibe, home of the Indri, the biggest lemur in Madagascar. Upon arrival, visit the Vakona reserve harboring five species of lemurs such as, the black-and-white ruffed lemur, the eastern bamboo lemur, the ring-tails, the browns and the dancing diademed sifaka. You will have fun during your visit here since lots of dance performances, photo-ops and a close encounter with the lemurs will entertain your day. And then, back to the car taking you to your hotel. <br /> Overnight: Andasibe Hotel
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 16"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANDASIBE – TANA</h3>
          <p className='text-justify'>
          After breakfast, we explore the reserve of Analamazoatra where the Indri and other species of lemurs, birds, reptiles and so forth dwell in this primary and secondary forest. Be ready to take lots of photo recording the haunting calls of the indri for a final walk in Andasibe before heading back to the capital. You shall reach Tana late in the afternoon and settle in your hotel close to the airport. <br /> Overnight: San Cristobal
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 17"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">DEPARTURE BACK HOME</h3>
          <p className='text-justify'>
          Transfer to the airport for flight heading back home. End of our service
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<KeyboardDoubleArrowDownIcon />}
        />

        
      </VerticalTimeline>

      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="card mb-3 included">
            <div class="card-header included-header text-dark"><h4><CheckCircleIcon /> Included to the offer</h4></div>
            <div class="card-body text-dark">
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet. <br />
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet.<br />
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet.<br />
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet.<br />
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="card mb-3 excluded">
            <div class="card-header excluded-header text-dark"><h4><DoNotDisturbOnTotalSilenceIcon /> Excluded to the offer </h4></div>
            <div class="card-body text-dark">
              <DoNotDisturbOnIcon /> Lorem ipsum dolor sit amet. <br />
              <DoNotDisturbOnIcon /> Lorem ipsum dolor sit amet.<br />
              <DoNotDisturbOnIcon /> Lorem ipsum dolor sit amet.<br />
              <DoNotDisturbOnIcon /> Lorem ipsum dolor sit amet.<br />
              <DoNotDisturbOnIcon /> Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div>

      </div>

      <div className="row mb-3">
        <div className="col price-itinerary"><Button className='BtnBookNow ' variant="contained"><MonetizationOnIcon /> Price 584$</Button> </div>
        <div className="col"> <Button variant="contained" className='BtnBookNow' data-bs-toggle="modal" data-bs-target="#staticBackdrop"><EventAvailableIcon /> BOOK NOW</Button></div>
      </div>

      <div>
            <h3 className='text-center'>See too the related tours</h3>
            <hr />
            <div className="row">
                <div className="col text-center col-lg-4 col-md-4 col-sm-4"><Link className='related-tours' to="/Tour/eastern-wonder">Eastern wonder</Link></div>
                <div className="col text-center col-lg-4 col-md-4 col-sm-4"><Link className='related-tours' to="/Tour/rainforest-birding">Rain Forest Birding</Link> </div>
                <div className="col text-center col-lg-4 col-md-4 col-sm-4"><Link className='related-tours' to="/Tour/diving-tour">Diving Tour</Link></div>
            </div>
            <hr />
        </div>

    </div>
  )
}

export default SouthernTrekking