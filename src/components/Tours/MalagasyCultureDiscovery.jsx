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


function MalagasyCultureDiscovery() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>Malagasy Culture Discovery itinerary</h1>
      <div className="row">
        <div className="col price-itinerary"><button className='PriceTours btn '><MonetizationOnIcon /> Price $1900/pax</button> </div>
        <div className="col"> <BookModal /> </div>

      </div>

      <hr />
      <div className='row text-center '>
        <div className="col"><span className="badge text-dark"> <MyLocationIcon />South</span></div>
        <div className="col"> <span className="badge text-dark"><AvTimerIcon /> 10 Days</span> </div>
        <div className="col"><span className="badge text-dark"><MonetizationOnIcon /> From $1900/pax</span></div>
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
          Upon arrival at Ivato international airport, you will be met by a member of our team and then you will be transferred in a private car taking you to your hotel settled in downtown. <br /> Overnight: Chalet des Roses.
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
          <h3 className="vertical-timeline-element-title">TANA – MANANDONA</h3>
          <p className='text-justify'>
          Set off southwards heading to Antsirabe passing by the capital Tana, and with an optional stop at Ambatolampy to see aluminum pot casting. When arriving in Antsirabe, drive southwards where you shall start the hike trekking to the rural village of Manandona visiting some workshops, the old palace while contemplating magnificent landscape. <br /> Overnight: Gite Manandona
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
          <h3 className="vertical-timeline-element-title">MANANDONA – AMBOSITRA</h3>
          <p className='text-justify'>
          In the morning, we depart today heading to Ambositra, the capital of woodcarving. Visit some workshops and then you can go shopping at some shops. After lunch, we drive to Antoetra. <br /> Overnight: Sous le Soleil
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
          <h3 className="vertical-timeline-element-title">AMBOSITRA – ANTOETRA</h3>
          <p className='text-justify'>
          After breakfast, we drive to Antoetra village where we start the trekking along the mountainous trails. The visit will be focused on some local traditional houses in hope to learn about their cultures and their daily life. Besides, when reaching Ifasina, home of the Zafimaniry tribe, this place will show you the value of their architectures, their beliefs and cultures. And then, walk back to your car taking you to your hotel.  <br /> Overnight: Sous le Soleil
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
          <h3 className="vertical-timeline-element-title">ANTOETRA – RANOMAFANA</h3>
          <p className='text-justify'>
          This morning, we set off to Ranomafana national park. Stop en route, offering amazing landscapes, and then a stop at Namorona waterfall. <br /> Overnight: Karibo Hotel
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
          <h3 className="vertical-timeline-element-title">RANOMAFANA – FIANARANTSOA</h3>
          <p className='text-justify'>
          We explore the morning in search of endemic animals. Ranomafana is the only place where we can observe the Golden bamboo lemur, Greater bamboo lemur, Milne Edwards sifaka, and few species of reptiles, satanic leaf-tailed gecko, frogs, and of course birds like the Velvety asity, Crested ibis, and so forth. After the visit, lunch and then we depart to Fianarantsoa, capital of the Betsileo tribe. <br /> Overnight: Zomatel
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
          <h3 className="vertical-timeline-element-title">FIANARANTSOA – MANAKARA</h3>
          <p className='text-justify'>
          Early morning transfer to the railway station taking us to Manakara. The landscape along this eastern patch is rewarding where you shall contemplate beautiful scenery of vanilla plantation, coffee plantation, banana plantation abounding all along this area. Besides, you will be learning a lot and get sound knowledge of local people, their daily life, culture and so forth. Arrival, you will be picked up and then transfer to your hotel.  <br /> Overnight: Parthenay Hotel
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
          <h3 className="vertical-timeline-element-title">MANAKARA – MANANJARY</h3>
          <p className='text-justify'>
          We set off to Mananjary, settled along the seaside. We shall have stops en-route visiting some places and get in touch with the locals to learn more about their cultures. Arriving in Mananjary, this place offers lots of opportunities to learn about Malagasy traditions especially of this eastern tribe. <br /> Overnight: Sorafa Hotel
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
          <h3 className="vertical-timeline-element-title">MANANJARY – NOSY VARIKA</h3>
          <p className='text-justify'>
          After breakfast, we embark on a boat heading to Nosy Varika which may take roughly 8 to 10 hours. We have lunch in a boat. The ride provides a good chance to experience rural Malagasy life, traditions, culture, visits of certain places, and so forth. Also, along the canal, birds abound and red fody tend to serenade travelers. <br /> Overnight: Le Petit Oasis
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
          <h3 className="vertical-timeline-element-title">NOSY VARIKA – MAHANORO</h3>
          <p className='text-justify'>
          As early as possible, leave Nosy Varika and then board on a boat taking you to Mahanoro. The ride is rewarding though a bit long and tiresome. However, the landscape along the canal is extraordinary where lots of birds including the Madagascar red fody, Herons, Terns, Madagascar coucal, etc. Besides, we have some stops along the canal including a visit at a vanilla plantation, the right moment to learn about how the local farmers grow vanilla. Also, other visits include a stop at a rural village, visiting a school, local traditional houses, etc. <br /> Overnight: Le Prestige Hotel
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 11"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">MAHANORO – ANDASIBE</h3>
          <p className='text-justify'>
          We depart as early as possible heading east toward Andasibe. The landscape is so stunning. So, stops along the road. We shall reach Andasibe early evening. <br /> Overnight: Andasibe Hotel
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 12"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANDASIBE</h3>
          <p className='text-justify'>
          We set off for a morning visit at Analamazoatra reserve, home of the biggest lemur, ‘Indri’. Besides, this reserve certainly grants lots of photo opportunities seeing various animals, birds, and reptiles like the Parson chameleon, the tiny ground chameleon, and other species of lemurs. Safari night walk in search of night active animals including mouse lemurs, fat-tailed dwarf lemurs, eastern bamboo lemurs, smallest chameleons, and so forth. <br /> Overnight: Andasibe Hotel
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 13"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<DirectionsCarIcon />}
        >
          <h3 className="vertical-timeline-element-title">ANDASIBE – TANA</h3>
          <p className='text-justify'>
          Rise early this morning to the haunting calls of the indri for a final walk in Andasibe before starting the return journey to the capital with photo stops en-route. Arrive late afternoon at your hotel where you have the evening at leisure. <br /> Overnight: Chalet des Roses
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 14"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">DEPARTURE BACK HOME</h3>
          <p className='text-justify'>
          Transfer to the airport to catch a flight taking you back home. End of our service
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
      <div className="col price-itinerary"><button className='PriceTours btn '><MonetizationOnIcon /> Price $1900/pax</button> </div>
        <div className="col"> <BookModal /> </div>

      </div>

      <div className='my-2' id='route-malagasy-culture-discovery'>
      <iframe title='Itinerary for Malagasy Culture Discovery' src="https://www.google.com/maps/d/u/0/embed?mid=1Mttmfm7MJOAhXpfn6u4TmSzp8SLUJ-4&ehbc=2E312F" width="640" height="480"></iframe>
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

export default MalagasyCultureDiscovery