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


function EasternWonder() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>Eastern Wonder itinerary</h1>
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
          contentStyle={{ background: 'var(--primary-white)', color: 'var(--primary-grey)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', borderBlockColor: '#000' }}
          icon={<FlightLandIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA (ARRIVAL)</h3>
          <p className='text-justify'>
          Upon arrival in Antananarivo (Tana in short), you will be met and welcomed by a representative from our company. And then, you shall have your private car taking you to your hotel. <br /> Overnight: Grand Hotel Urban          </p>


        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 2"
          contentStyle={{ background: 'var(--primary-white)', color: 'var(--primary-grey)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA – PALMARIUM</h3>
          <p className='text-justify'>
          Set off for a long drive to Ankanin’ny Nofy (also called Palmarium) settled along the man-made Lake Rasoabe along the waterway called the Canal of Pangalanes. Arriving at Manambato, we depart to Palmarium in a speed boat taking roughly an hour. <br /> Overnight: Palmarium Lodge          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 3"
          contentStyle={{ background: 'var(--primary-white)', color: 'var(--primary-grey)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">PALMARIUM</h3>
          <p className='text-justify'>
          Palmarium has a reserve where some species of lemurs are found there. This is the best place to see the aye-aye and other species of animals. Beside, Palmarium is a haven for relaxation, with its pretty seaside and lush green vegetation. You will surely enjoy the visit walking through the forest while accompanied by your local guide who will help you spot as many animals as possible. A group of indri, sifakas, red lemurs, black lemurs, crowned lemurs and black and white ruffed lemurs can be observed easily. <br /> Overnight: Parlmarium Lodge           </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 4"
          contentStyle={{ background: 'var(--primary-white)', color: 'var(--primary-grey)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">PALMARIUM – ANDASIBE</h3>
          <p className='text-justify'>
          After breakfast, embark on a fast motor boat heading to Andasibe national park. In the afternoon, visit the famous Vakona Reserve where five species of lemurs such as the black and white ruffed lemur, the browns, the ring-tails, the modest eastern bamboo lemur and the diademed sifaka can be seen easily. <br /> Overnight: Andasibe Hotel           </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 5"
          contentStyle={{ background: 'var(--primary-white)', color: 'var(--primary-grey)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANDASIBE</h3>
          <p className='text-justify'>
          We set off for a morning visit at Analamazoatra reserve, home of the biggest lemur, ‘Indri’. Besides, this reserve certainly grants lots of photo opportunities seeing various animals, birds, and reptiles like the Parson chameleon, the tiny ground chameleon, and other species of lemurs. Safari night walk (as extra) in search of night active animals including mouse lemurs, fat-tailed dwarf lemurs, eastern wooly lemurs, smallest chameleons, and so forth. <br /> Overnight: Andasibe Hotel          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 6"
          contentStyle={{ background: 'var(--primary-white)', color: 'var(--primary-grey)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title"> ANDASIBE – TANA </h3>
          <p className='text-justify'>
          We head back to Tana, with stops en route along this eastern mountainous road. Then, upon arrival, continue for an afternoon city tour visiting the upper town and lower town in downtown Tana, including the queen palaces, the old picturesque cathedral and then the lake Anosy. <br /> Overnight: Grand Hotel Urban          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 7"
          contentStyle={{ background: 'var(--primary-white)', color: 'var(--primary-grey)', border: '2px solid var(--primary-grey)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">DEPARTURE</h3>
          <p className='text-justify'>
          Today, transfer to the airport for your flight taking you back home. End of our service.
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
      <div className="col price-itinerary"><button className='PriceTours btn '><MonetizationOnIcon /> Price $450</button> </div>
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

export default EasternWonder