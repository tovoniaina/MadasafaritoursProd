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


function RainForestBirding() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>Rainforest Birding itinerary</h1>
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
          Upon arrival at Ivato international airport, you will be met by a member of our team and then you will be transferred to your hotel. <br /> Overnight: Chalet des Roses.
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
          <h3 className="vertical-timeline-element-title">TANA – ANTSIRABE</h3>
          <p className='text-justify'>
          Set off toward Antsirabe with stops along the road to spot some birds including the Black-crowned night heron, Green backed heron, Squacco heron, Black egret, Little egret, Hammerkop and so forth. When arriving at Antsirabe, visit the surrounding areas and various workshops of semi and precious stones. <br /> Overnight: Le Voyageur 
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
          <h3 className="vertical-timeline-element-title">ANTSIRABE – RANOMAFANA</h3>
          <p className='text-justify'>
          We depart today heading to Ranomafana; stop at Ambositra, the capital of woodcarving. Visit some workshops and then you can go shopping at some shops. After lunch, continue driving to Ranomafana. Stop at Namorona waterfall. <br /> Drive to your hotel for overnight at Karibo Hotel.
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
          <h3 className="vertical-timeline-element-title">RANOMAFANA (VOHIPARARA VISIT)</h3>
          <p className='text-justify'>
          You have a full day visit in Vohiparara forest accompanied by your guides in search of several species of birds, 12 species of lemur and 90 species of butterflies. Besides, there are 98 species of amphibians and 62 species of reptiles such as chameleons, and so on. The Pitta like ground roller and other endemic birds like the Brown mesite, Velvet asity, Stripe-throated jerry, Common newtonia, Dark newtonia, Long-billed Tretraka, Malagasy kingfisher, Red capped coua, Forest rock thrush, etc. nest in this park. <br /> Overnight: Karibo Hotel
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
          <h3 className="vertical-timeline-element-title">RANOMAFANA VISIT - ANTSIRABE</h3>
          <p className='text-justify'>
          We explore the morning in search of not only birds but also other animals. Ranomafana is the only place where we can observe the Golden bamboo lemur, Greater bamboo lemur, Milne Edwards sifaka, and few species of reptiles, frogs, satanic leaf-tailed gecko, ring-tailed mangoose, and of course birds like the Velvety asity, Crested ibis, and so forth. After the visit, we drive back to Antsirabe. <br /> Overnight: Le Voyageur
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
          <h3 className="vertical-timeline-element-title">ANTSIRABE – TANA</h3>
          <p className='text-justify'>
          This morning, city tour and then we depart back to Tana with stops en route. <br /> Settle in your hotel for overnight at Chalet des Roses
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
          <h3 className="vertical-timeline-element-title">TANA – ANDASIBE</h3>
          <p className='text-justify'>
          Depart to Andasibe taking approximately 3.5 hour drive. Stop at Mangoro River to spot some birds on the bank of the River such as Madagascar Pratincole, Common sandpiper, Malachite kingfisher and many more. On arrival, visit the famous Vakona Reserve where five species of lemurs such as the black-and white ruffed lemur, the browns, the ring-tail lemur, the modest eastern bamboo lemur and the diademed sifaka can be seen in this reserve. <br /> Overnight: Andasibe Hotel
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
          <h3 className="vertical-timeline-element-title">ANDASIBE (MANTADIA NATIONAL PARK)</h3>
          <p className='text-justify'>
          We drive to Mantadia national park in search of endemic birds nesting in this park. The bird list of today includes, Pitta like ground roller, Scaly ground roller, Red breasted coua, Red fronted coua, Madagascar Nightjar, White-throated Oxylabes, Velvety asity, Yellow bellied asity, spectacular Red Fody, Broad billed roller, Cuckoo roller, Madagascar serpent eagle, Madagascar Ibis, Madagascar starling, etc. Lunch and then drive back to your hotel. <br /> Overnight: Andasibe hotel
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
          <h3 className="vertical-timeline-element-title">ANDASIBE (ANALAMAZOATRA RESERVE) - TANA</h3>
          <p className='text-justify'>
          After breakfast, visit Analamazoatra reserve harboring many species of birds such as the nuthatch vanga, Blue vanga, Madagascar fluff tail, Madagascar Wood rail, Madagascar Cuckoo shrike, Madagascar buzzard, Short-legged ground roller, Red-shouldered vanga, Nelicourvi weaver, Blue Coua, White throated rail, Madagascar harrier hawk, Frances sparrow hawk and many more. After the visit, we drive back to Tana. <br /> Overnight: Chalet des Roses
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 10"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">DEPARTURE BACK HOME</h3>
          <p className='text-justify'>
          You have a morning city tour visiting Tana and its surrounding including the upper town and lower town in downtown Tana, the queen palaces, the old picturesque cathedral and then the lake Anosy. After the city tour, you will be transferred to the airport for your flight back home. End of our service.
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

    </div>
  )
}

export default RainForestBirding