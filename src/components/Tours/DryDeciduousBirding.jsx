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

function DryDeciduousBirding() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>Dry Deciduous Birding itinerary</h1>
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
            On arrival in Antananarivo (abbreviated as Tana) a member of our team will welcome you at the international arrival hall and transfer you to your hotel. Overnight: Grand Hotel Urban
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
            This morning, breakfast and then set off towards Andasibe. Along the journey, you will enjoy various sceneries from highlands to rice fields and small cluttered traditional villages mostly perched on hill sides. The road is steep and winding; with lush vegetation until you reach Andasibe, home of the Indri, the biggest lemur in Madagascar. Upon arrival, visit the Vakona reserve harboring five species of lemurs such as, the black-and-white ruffed lemur, the eastern bamboo lemur, the ring-tails, the browns and the dancing diademed sifaka. You will have fun during your visit here since lots of dance performances, photo-ops and a close encounter with the lemurs will fill your day. And then, back to the car taking you to your hotel. Overnight: Andasibe Hotel
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
          <h3 className="vertical-timeline-element-title">ANDASIBE - TANA</h3>
          <p className='text-justify'>
            After breakfast, we explore the reserve of Analamazoatra where the Indri and other species of lemurs, birds, reptiles and so forth dwell in this primary and secondary forest. Be ready to take lots of photos recording the haunting calls of the indri for a final walk in Andasibe before heading back to the capital. You shall reach Tana late in the afternoon and settle in your hotel. Overnight: Grand Hotel Urban
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 4"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">DEPARTURE BACK HOME</h3>
          <p className='text-justify'>
            City tour to explore the capital in order to learn a lot about its colorful culture, palaces, and a time to go shopping at the famous Digue market selling handicrafts, stones, woodcarvings, raffia, and so forth. Then, transfer to the airport for a flight taking you back home.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<KeyboardDoubleArrowDownIcon />}
        />

        
      </VerticalTimeline>

      <div className="row">
        <div className="col col-lg-6 col-md-6 col-sm-12">
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

        <div className="col col-lg-6 col-md-6 col-sm-12">
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

export default DryDeciduousBirding