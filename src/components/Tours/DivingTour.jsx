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

function DivingTour() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>Diving Tour itinerary</h1>
      <div className="row">
        <div className="col price-itinerary"><Button className='BtnBookNow ' variant="contained"><MonetizationOnIcon /> Price 584$</Button> </div>
        <div className="col"><a className='booknow' href="#navtop"><Button className='BtnBookNow ' variant="contained"><EventAvailableIcon /> Book Now</Button></a></div>
      </div>
      
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
          Upon arrival into Ivato international airport you will be met and welcomed by one of our representatives who will take you to your private car and then transfer to your hotel to relax. <br /> Overnight: Grand Hotel Urban 
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
          <h3 className="vertical-timeline-element-title">TANA - ANDASIBE</h3>
          <p className='text-justify'>
          This morning, breakfast and then set off towards Andasibe. Along the journey, you will enjoy various sceneries from highlands to rice fields and small cluttered traditional villages mostly perched on hill sides. The road is steep and winding; with lush vegetation until you reach Andasibe, home of the Indri, the biggest lemur in Madagascar. Upon arrival, visit the Vakona reserve harboring five species of lemurs such as, the black-and-white ruffed lemur, the eastern bamboo lemur, the ring-tails, the browns and the dancing diademed sifaka. You will have fun during your visit here since lots of dance performances, photo-ops and a close encounter with the lemurs will fill your day. And then, back to the car taking you to your hotel. <br /> Overnight: Andasibe Hotel
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
          <h3 className="vertical-timeline-element-title">ANDASIBE</h3>
          <p className='text-justify'>
          We explore the morning in search of endemic animals recorded in Analamazoatra reserve, home of the biggest lemur called ‘Indri-Indri; its eerie and haunting calls can be heard miles away from your hotel. Besides, we shall observe other fauna and flora including birds, reptiles and so many more. In the afternoon, visit some traditional villages of Andasibe. Evening safari walk can be arranged as extra. <br /> Overnight: Andasibe Hotel          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 4"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANDASIBE – TANA</h3>
          <p className='text-justify'>
          Around 8.00 am, depart back to Tana. En route, stops for photo. On arrival in the afternoon, you can relax and prepare for the next stage of your adventure. Settle in your hotel located close to the airport in preparation for your next morning flight heading to Nosy Be. <br /> Overnight: San Cristobal          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 5"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA – NOSY BE</h3>
          <p className='text-justify'>
          Transfer to the airport to take a flight heading to Nosy Be. Upon arrival, meet our representative and then set off to your hotel. Depending on your arrival time, the rest of the day is yours at leisure. Nosy be is a haven place for beach relaxation, snorkeling and diving. Activities listed as extra during your three nights stay. <br /> Overnight: Belvedere
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
          <h3 className="vertical-timeline-element-title">NOSY BE</h3>
          <p className='text-justify'>
          This so-called “perfume island” unveils remarkable encounters. Diving in Nosy Be discloses a fantastic biodiversity, preserved from mass tourism. With its pristine coral reefs, with full range of colorful fishes such as snappers, barracudas, unicorn fishes, groupers of all sizes, turtles, grey reef sharks, white tips, leopards, Manta rays, whale sharks abound in its underwater life unrivaled in beauty and diversity. <br /> Overnight: Belvedere          </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 7"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">NOSY BE</h3>
          <p className='text-justify'>
          You have the whole day at leisure. However, certain activities can be arranged. You can explore Nosy Be and its surrounding or embark on a fast motor boat taking you to Nosy Komba. This island harbors various animals and home of the black lemurs. Visit this island and then the village nearby to learn about the locals’ daily life, cultures and so on. And then, back to the boat taking you to Nosy Tanikely, a good place for diving as well, with nice beach and crystal clear water. After lunch, head back to Nosy Be. <br /> Overnight: Belvedere
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
          <h3 className="vertical-timeline-element-title">NOSY BE – TANA</h3>
          <p className='text-justify'>
          A relaxing morning prior to your flight back to Tana; you will be met and transferred to your hotel. <br /> Overnight: Grand Hotel Urban
  </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 9"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">DEPARTURE BACK HOME</h3>
          <p className='text-justify'>
          Morning city tour visiting the surrounding area of the capital including downtown crowded with bunch of visitors, its old Zoma market, and then the Lake Anosy before reaching the upper town where the old queen palace, huge cathedral and other fortresses can be visited. After the city tour, you will be transferred to the airport in time for your international flight back home.
  </p>
          </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<KeyboardDoubleArrowDownIcon />}
        />

        
      </VerticalTimeline>

      <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="card text-white mb-3 included incluD">
            <div class="card-header"><h4><CheckCircleIcon /> Included to the offer</h4></div>
            <div class="card-body">
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet. <br />
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet.<br />
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet.<br />
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet.<br />
              <CheckCircleOutlineIcon /> Lorem ipsum dolor sit amet.
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12">
          <div className="card text-white mb-3 excluded">
            <div class="card-header text-dark"><h4><DoNotDisturbOnTotalSilenceIcon /> Excluded to the offer </h4></div>
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
        <div className="col"><a className='booknow' href="#navtop"><Button className='BtnBookNow ' variant="contained"><EventAvailableIcon /> Book Now</Button></a></div>
      </div>

    </div>
  )
}

export default DivingTour