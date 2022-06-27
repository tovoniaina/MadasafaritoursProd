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



function DryDeciduousBirding() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>Dry Deciduous Birding itinerary</h1>
      <div className="row">
      <div className="col price-itinerary"><button className='PriceTours btn '><MonetizationOnIcon /> Price $1980/pax</button> </div>
        <div className="col"> <BookModal /> </div>
      </div>

      <hr />
      <div className='row text-center '>
        <div className="col"><span className="badge text-dark"> <MyLocationIcon />West</span></div>
        <div className="col"> <span className="badge text-dark"><AvTimerIcon /> 11 Days</span> </div>
        <div className="col"><span className="badge text-dark"><MonetizationOnIcon /> From $1980/pax</span></div>
        <div className="col"><span className="badge text-dark"><GroupsIcon /> 4 persons</span></div>
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
          A member of our team will welcome you at Ivato international airport Hall. And then you will be transferred to your hotel located downtown Antananarivo (often abbreviated to Tana) where you can relax before the start of your next day adventures. <br /> Overnight: San Cristobal
          </p>


        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 2"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA – TULEAR – IFATY</h3>
          <p className='text-justify'>
          You will be transferred to the airport for flight taking you to Tuléar, the capital of the Vezo fishing people. Upon arrival, you will be met by a member of our team representing our company, taking you to Ifaty, home of the fishermen, a village just by the seaside. Along the road, stops in hope to spot few species of birds including the Ring-plover, Lesser flamingo, Kittliz plover, Black-winged Stilt, and quite possibly the rarest Madagascar plover, Ruddy turnstone, Wimbrel, etc. <br /> Overnight: Belle Vue
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
          <h3 className="vertical-timeline-element-title">IFATY</h3>
          <p className='text-justify'>
          Set off early in the morning by 5 a.m. visiting Ifaty spiny forest. Ifaty is home of the long-tailed Running coua, Chaberts vanga, Red-shouldered vanga, Sickle-billed vanga, Sub-desert Mesite, Madagascar Nightjar, Green-capped coua, Red-capped coua, Lafreysnaye’s vanga, Common Newtonia, Archbolds Newtonia, Hook-billed vanga, Sub-desert brush-warbler, Madagascar Harrier hawk, Sakalava Weaver, Madagascar Fody, etc. In the afternoon, you can relax by the beach or explore the village to see and learn how fishermen do their daily business when taking offshore their catch, fresh and plenty. <br /> Overnight: Belle Vue
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 4"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">IFATY – TSIMANAMPETSOTSE</h3>
          <p className='text-justify'>
          We drive back to Tuléar and then transfer to Anakao boarding in a fast motor boat taking approximately one and half hour. Upon arrival, we depart to Tsimanampetsotse national park taking roughly three hour drive. <br /> Overnight: Relais d’Ambola
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
          <h3 className="vertical-timeline-element-title">TSIMANAMPETSOTSE</h3>
          <p className='text-justify'>
          This protected area is composed of a coastal forest, a limestone plateau, with a sandy lake and several caves some of which are accessible. We have the whole day visiting this park in search of the Red-tailed vanga, Madagascar plover, Greater and Lesser flamingo, Red knobbed coot, Verreauxi Couas and so forth. Besides, this is the only place that harbors the blind fish. After the visit, we drive back to your hotel. <br /> Overnight: Relais d’Ambola
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
          <h3 className="vertical-timeline-element-title">TSIMANAMPETSOTSE – ANAKAO</h3>
          <p className='text-justify'>
          Early morning breakfast and then drive back to Anakao. Upon arrival, immediate boat ride heading to Nosy Ve, home of the Red-tailed tropic bird, Sanderling, White-fronted Plover, Great Crested-Tern, Lesser Crested-Tern, etc. Also, Nosy Ve’s fine white sand, very clean beach, crystal clear water is a good place for snorkeling in order to spot plethora species of colorful fish underwater. Back to your hotel, and spend the afternoon at leisure. <br /> Overnight: Anakao Ocean Lodge
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 7"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANAKAO – TANA</h3>
          <p className='text-justify'>
          Early morning transfer back to Tuléar. Then, transfer to the airport for flight back to Tana. <br /> Overnight: San Cristobal
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
          <h3 className="vertical-timeline-element-title">TANA – ANKARAFANTSIKA</h3>
          <p className='text-justify'>
          Morning drive along the national road number 4. Stops en route in hope to spot some birds including the Madagascar kestrel, Madagascar reunion harrier, Squacco heron, Little egret, Black egret, Green-backed heron, Black-crowned night heron, and so many more. You arrive at Ampijoroa forest station early evening. <br /> Overnight: Bungalow
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 9"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANKARAFANTSIKA</h3>
          <p className='text-justify'>
          We set off for a whole visit day in search of birds listed among our today’s agenda. This dry deciduous forest is located at 462 km north of Antananarivo. There are 103 species of birds recorded here, among which the most localized are Madagascar Fish-Eagle, Schlegel’s Asity, Van Dam’s Vanga, Coquerel’s Coua,  Madagascar Jacana, Rufous vanga,  White-Breasted Mesite, White-headed Vanga, Frances’ sparrow hawk, Malagasy Scoops-Owl, Madagascar lesser cuckoo, African darter, Common greenshank, Purple heron, Madagascar crested Ibis, Malagasy Pond-heron, Madagascar button-quail,  Madagascar Buzzard,   Madagascar sparrow hawk, Cuckoo-roller,Broad-billed roller,  etc. <br /> Overnight: Bungalow
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 10"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANKARAFANTSIKA – TANA</h3>
          <p className='text-justify'>
          After breakfast, we drive back to Tana. Lunch somewhere and then few stops can be arranged by your guide along the road. <br /> Overnight: San Cristobal
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 11"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">FLY HOME</h3>
          <p className='text-justify'>
          We have city tour this morning in order to learn about the capital and its people, their cultures, their daily life and so on. Some visit will be focused on areas settled in the upper town, visiting the old queen palace, picturesque cathedral, the lake Anosy and the busiest central part where the famous Zoma market is located, seeing bunch of foreign visitors, with good European architectures. Then, drive to Route Digue, a recommended place for souvenirs including products made from raffia, zebu horns, woodcarvings, semi-precious stones, local made tee-shirts, and so on. After shopping, transfer to the airport to catch a flight taking you back home. 
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
              <DoNotDisturbOnIcon /> Gratuities for the local team<br /> <br /> <br />
            </div>
          </div>
        </div>

      </div>

      <div className="row mb-3">
      <div className="col price-itinerary"><button className='PriceTours btn '><MonetizationOnIcon /> Price $1980/pax</button> </div>
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

export default DryDeciduousBirding