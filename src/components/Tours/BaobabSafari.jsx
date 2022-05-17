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

function BaobabSafari() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>Baobab Safari itinerary</h1>
      <div className="row">
        <div className="col price-itinerary"><button className='PriceTours btn '><MonetizationOnIcon /> Price $450</button> </div>
        <div className="col"> <BookModal /> </div>
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
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', borderBlockColor: '#000' }}
          icon={<FlightLandIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA (ARRIVAL)</h3>
          <p className='text-justify'>
            A member of our team will meet and welcome you at Ivato international airport. Then, you will be transferred to your hotel to relax after a long flight. <br /> Overnight: Tsara Guest House
          </p>


        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 2"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA – KIRINDY</h3>
          <p className='text-justify'>
            You will be transferred to the airport for your flight to Morondava. Upon arrival, a member of our team will pick you up and transfer you in your private 4x4 vehicle going to Kirindy Forest. Settle in and then night safari walk in search of tiny mouse lemur, chameleons and other animals endemic in this forest. <br /> Overnight: Relais du Kirindy
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 3"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">KIRINDY – TSINGY</h3>
          <p className='text-justify'>
            In the morning, we visit the reserve of Kirindy, a dry deciduous forest home of the Fosa (the biggest lemurs’ predator), the jumping rat and harboring seven species of lemur including the dancing Verreaux's sifakas, the tiny mouse lemur of Madame Berthe, and common brown lemurs. Besides, 50 species of reptiles, 15 amphibian species and 40 species of birds are also found in this magnificent forest without forgetting several bats, tenrecs, mongooses and rodents completing the mammal population. After the visit, drive to Bekopaka crossing the Tsiribihina river on a ferry to reach the town of Belo sur Tsirbihina, the cultural capital of the Sakalava tribe. <br /> Overnight: Orchidée de Bemaraha
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 4"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">TSINGY VISIT</h3>
          <p className='text-justify'>
            Explore both the Petit Tsingy and Grand Tsingy. The whole protected area, comprising a surface of 1.575 km square was designated a UNESCO World Heritage Site in 1990. While hiking in the park, you will observe the beauty of these limestone pinnacles, a hike leading you through narrow gauge, climbing on top (harness is a must), walking on a suspended bridge, and toward the cathedral where you may spot lemurs, the Giant rat, the Giant coua, Madagascar green pigeon, and many more. <br /> Overnight: Orchidée de Bemaraha
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 5"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">TSINGY – MORONDAVA</h3>
          <p className='text-justify'>
            After breakfast, we depart back to Morondava. There will be stops en-route including the ‘amorous baobab’, the Baobab Alley where you can have a nice photo at sunset time. Baobabs are distinctive trees adapted to thrive in harsh conditions. <br /> Overnight: Chez Maggie
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 6"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">MORONDAVA – TANA</h3>
          <p className='text-justify'>
            Transfer to the airport for flight back to Tana. On arrival you will be met and transferred to your hotel. <br /> Overnight: Le Grand Urban Hotel
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 7"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">DEPARTURE BACK HOME</h3>
          <p className='text-justify'>
            Check out of your hotel and transfer to the airport for flight back home. End of our service.
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

      <div className="row">
        <div className="col price-itinerary"><button className='PriceTours btn '><MonetizationOnIcon /> Price $450</button> </div>
        <div className="col"> <BookModal /> </div>
      </div>

      <div>
            <h3 className='text-center'>See too the related tours</h3>
            <hr />
            <div className="row">
                <div className="col text-center col-lg-4 col-md-4 col-sm-4"><Link className='related-tours' to="/Tour/mada-northern-safari">Mada Northern Safari</Link></div>
                <div className="col text-center col-lg-4 col-md-4 col-sm-4"><Link className='related-tours' to="/Tour/southern-trekking">Southern Trekking</Link> </div>
                <div className="col text-center col-lg-4 col-md-4 col-sm-4"><Link className='related-tours' to="/Tour/mada-southern-safari">Mada Southern Safari</Link></div>
            </div>
            <hr />
      </div>

    </div>
  )
}

export default BaobabSafari