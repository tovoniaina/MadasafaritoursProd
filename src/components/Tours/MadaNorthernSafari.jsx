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
import Button from '@mui/material/Button';
import TransitionsModal from '../TransitionsModal';

function MadaNorthernSafari() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>Mada Northern Safari itinerary</h1>
      <div className="row">
        <div className="col price-itinerary"><Button className='BtnBookNow ' variant="contained"><MonetizationOnIcon /> Price 584$</Button> </div>
        <div className="col"><TransitionsModal/></div>
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
          On arrival in Antananarivo, you will be met by a member of our team who will welcome and transfer you to your hotel in your private vehicle. <br /> Overnight: San Cristobal
          </p>


        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 2"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA – AMBER MOUNTAIN</h3>
          <p className='text-justify'>
          Transfer to the airport to take a flight going to Diego. Arriving in Diego, depart to Amber Mountain national park. <br /> Overnight: Nature Lodge          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 3"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">AMBER MOUNTAIN VISIT – ANKARANA</h3>
          <p className='text-justify'>
          We devote the morning exploring the forest in search of endemic animals. The tiny ground chameleons known as Brookesia minima, Amber mountain rock thrush, Ring tailed mangoose, Crowned lemur, Sanfords brown lemurs, beautiful waterfalls, orchids, and so many more are among the interests of today’s hike. After the visit, drive to Ankarana reserve passing by Diego. <br /> Overnight: Relais d’Ankarana
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
          <h3 className="vertical-timeline-element-title">ANKARANA VISIT</h3>
          <p className='text-justify'>
          We have full day visiting the reserve of Ankarana. This reserve is famous for its limestone pinnacles, bat caves where stalagmite and stalactites abound, following the rocky track when criss-crossing the reserve. Besides, there are many birds nesting in this reserve including the crested coua, Sickle billed vanga, Madagascar buttonquail and many more. Also, common browns, mouse lemurs and other species dwell in this reserve. <br /> Overnight: Relais d’Ankarana
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
          <h3 className="vertical-timeline-element-title">ANKARANA – NOSY BE </h3>
          <p className='text-justify'>
          After breakfast, we depart to Nosy be passing by Ankify where we shall take a fast motor boat transferring us to Nosy be. Nosy be is internationally famous for its beautiful beaches, a good place for diving and other activities. <br /> Overnight: Belvedere
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
          The whole day is yours at leisure. However, there are many activities that can be arranged from your hotel. Among which, a visit at Nosy Tanikely, a good place for snorkeling, and stop by the lighthouse near which there are flocks of bats and birds. <br /> Overnight: Belvedere
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
          <h3 className="vertical-timeline-element-title">NOSY BE</h3>
          <p className='text-justify'>
          Also, another day set at leisure. You can arrange activities visiting the surrounding islets nearby including the Nosy Komba, home of the black lemur. At this place, a village walk is possible as well. <br /> Overnight: Belvedere
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 8"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">NOSY BE – TANA</h3>
          <p className='text-justify'>
          You will be transferred to the airport taking you back to Tana. Upon arrival, you will be picked up and then transferred to your hotel. <br /> Overnight: Le Grand Urban Hotel          </p>
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
          We have a city tour visiting the capital including its busiest area where the famous Zoma market is, with lots of foreign visitors, and then drive to the upper town visiting the old queen palace, the catholic cathedral, the lake Anosy before taking you to Digue, the shopping center for souvenirs where you can find products made from raffia, woodcarvings, semi-precious stones, and so forth. After the city tour, transfer to the airport to catch a flight taking you back home.
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
        <div className="col"><TransitionsModal/></div>
        </div>

    </div>
  )
}

export default MadaNorthernSafari