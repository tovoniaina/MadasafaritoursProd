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
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import GroupsIcon from '@mui/icons-material/Groups';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { Link } from "react-router-dom";
import BookModal from './ButtonRequestAQuote';


function PostWeddingSafari() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>Post Wedding Safari itinerary</h1>
      <div className="row">
      <div className="col price-itinerary"><button className='PriceTours btn '><MonetizationOnIcon /> $2000/pax</button> </div>
        <div className="col"> <BookModal /> </div>
      </div>

      <hr />
      <div className='row text-center '>
        <div className="col"><span className="badge text-dark"> <MyLocationIcon />NorthWest</span></div>
        <div className="col"> <span className="badge text-dark"><AvTimerIcon /> 10 Days</span> </div>
        <div className="col"><span className="badge text-dark"><MonetizationOnIcon /> From $2000/pax</span></div>
        <div className="col"><span className="badge text-dark"><GroupsIcon /> 2 persons</span></div>
      </div>
      <hr />
      
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 1"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', borderBlockColor: '#000' }}
          icon={<FlightLandIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA (ARRIVAL)</h3>
          <p className='text-justify'>
          Upon arrival into Ivato airport, you will be met and welcomed at the Hall by one of our team taking you to your private vehicle. And then, you will be transferred to your hotel to relax. <br /> Overnight: Louvre Hotel
          </p>


        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 2"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA - ANDASIBE</h3>
          <p className='text-justify'>
          Set off east to Andasibe Reserve passing through highland scenery and rice paddies. Along the journey, you will enjoy various sceneries from highlands to rice fields and small cluttered traditional villages mostly perched on hill sides. The road is steep and winding; with lush vegetation until you reach Andasibe, home of the Indri, the biggest lemur in Madagascar. Upon arrival, visit the Vakona reserve harboring five species of lemurs such as, the black-and-white ruffed lemur, the eastern bamboo lemur, the ring-tails, the browns and the dancing diademed sifaka. You will have fun during your visit here since lots of dance performances, photo-ops and a close encounter with the lemurs will entertain your day. And then, back to the car taking you to your hotel. <br /> Overnight: Andasibe Hotel
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 3"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANDASIBE VISIT - TANA</h3>
          <p className='text-justify'>
          After breakfast, we explore the reserve of Analamazoatra where the Indri and other species of lemurs, birds, reptiles and so forth dwell in this primary and secondary forest. Be ready to take lots of photo recording the haunting calls of the indri for a final walk in Andasibe before heading back to the capital. You shall reach Tana late in the afternoon and settle in your hotel close to the airport. <br /> Overnight: San Cristobal
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 4"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA – NOSY BE </h3>
          <p className='text-justify'>
          Transfer to the airport to take a flight heading to Nosy Be. Upon arrival, meet our representative and then set off to your hotel. <br /> Overnight: Belvedere
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 5"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">NOSY BE – NOSY TSARABANJINA</h3>
          <p className='text-justify'>
          After breakfast embark on a fast motor boat heading to Nosy Tsarabanjina, a superb island lined with white sand beaches and crystal clear water. The whole day is yours at leisure. Extra activities can be organized from your hotel. <br /> Overnight: Constance Lodge
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 6"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">NOSY TSARABANJINA</h3>
          <p className='text-justify'>
          The whole day is yours at leisure. In fact, Tsarabanjina is an outstanding area ranking top in the world, viewed as the best place for movie shooting that allows luxurious and elegant eco-friendly resort located in the northern tip of Madagascar. <br /> Overnight: Constance Lodge
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 7"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">NOSY TSARABANJINA – NOSY BE</h3>
          <p className='text-justify'>
          Nosy Be is 40 miles from the island of Nosy Tsarabanjina. Today, we set off heading back to Nosy Be. You have the whole day at leisure. <br /> Overnight: Belvedere
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 8"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">NOSY BE – NOSY KOMBA – NOSY TANIKELY</h3>
          <p className='text-justify'>
          You have another day at leisure. However, there are lots of activities that can be arranged from your hotel. You can explore Nosy be and its surrounding or embark on a fast motor boat taking you to Nosy Komba. This island harbors various animals and home of the black lemurs. Visit this island and then the village nearby to learn about the locals’ daily life, cultures and so on. And then, back to the boat taking you to Nosy Tanikely, a good place for diving as well, with nice beach. After lunch, head back to Nosy be. <br /> Overnight: Belvedere
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 9"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">NOSY BE – TANA</h3>
          <p className='text-justify'>
          Today, transfer to the airport for flight back to Tana. Upon arrival, you will be met and transferred to your hotel. <br /> Overnight: San Cristobal
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 10"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">DEPARTURE BACK HOME</h3>
          <p className='text-justify'>
          Morning city tour visiting the surrounding area of the capital including the city center crowded with bunch of visitors, its old Zoma market, and then the Lake Anosy before reaching the upper town where the old queen palace, huge cathedral and other fortress can be visited. After the city tour, you will be transferred to the airport in time for your international flight back home.
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
              <CheckCircleOutlineIcon /> Hotel accommodation with breakfast <br />
              <CheckCircleOutlineIcon /> 4WD car +fuel and the driver + specialized guide + their indemnities for all the tour<br />
              <CheckCircleOutlineIcon /> Speed boat fees<br />
              <CheckCircleOutlineIcon /> All park entry fees and local tour guide<br />
              <CheckCircleOutlineIcon /> Car insurances, Taxes, our commissions
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="card mb-3 excluded">
            <div class="card-header excluded-header text-dark"><h4><DoNotDisturbOnTotalSilenceIcon /> Excluded to the offer </h4></div>
            <div class="card-body text-dark">
              <DoNotDisturbOnIcon /> International flights, domestic flights <br />
              <DoNotDisturbOnIcon /> Personal spending, drinks, dinner and lunches (except in places mentioned half or full board)<br />
              <DoNotDisturbOnIcon /> Gratuities for the local team<br />
            </div>
          </div>
        </div>

      </div>

      <div className="row mb-3">
      <div className="col price-itinerary"><button className='PriceTours btn '><MonetizationOnIcon /> Price $2000/pax</button> </div>
        <div className="col"> <BookModal /> </div>
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

export default PostWeddingSafari