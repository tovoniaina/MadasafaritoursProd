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


function MadaSouthernSafari() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>Mada Southern Safari itinerary</h1>
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
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-white)', borderBlockColor: '#000' }}
          icon={<FlightLandIcon />}
        >
          <h3 className="vertical-timeline-element-title">TANA (ARRIVAL)</h3>
          <p className='text-justify'>
          Upon arrival at Ivato international airport, you will meet the representative of our company who shall welcome you at the Hall. And then you will be transferred to your hotel. <br /> Overnight: Le Grand Urban Hotel
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
          This morning, breakfast and then set off towards Andasibe. Along the journey, you will enjoy various sceneries from highlands to rice fields and small cluttered traditional villages mostly perched on hill sides. The road is steep and winding; with lush vegetation until you reach Andasibe, home of the Indri, the biggest lemur in Madagascar. Upon arrival, visit the Vakona reserve harboring five species of lemurs such as, the black-and-white ruffed lemur, the eastern bamboo lemur, the ring-tail lemurs, the browns and the dancing diademed sifakas. You will have fun during your visit there since lots of dance performances, photo-ops and a close encounter with the lemurs will entertain your day. And then, back to the car taking you to your hotel. <br /> Overnight: Andasibe Hotel
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
          <h3 className="vertical-timeline-element-title">ANDASIBE</h3>
          <p className='text-justify'>
          We set off for a morning visit at Analamazoatra reserve, home of the biggest lemur, ‘Indri’. Besides, this reserve certainly grants lots of photo opportunities seeing various animals, birds, and reptiles like the Parson chameleon, the tiny ground chameleon, and other species of lemurs. Safari night walk in search of night active animals including mouse lemurs, fat-tailed dwarf lemurs, eastern wooly lemurs, smallest chameleons, and so forth. <br /> Overnight: Andasibe Hotel
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
          <h3 className="vertical-timeline-element-title">ANDASIBE – ANTSIRABE</h3>
          <p className='text-justify'>
          Set off southwards heading to Antsirabe passing by the capital Tana, and with an optional stop at Ambatolampy to see aluminum pot casting. When arriving at Antsirabe, visit the surrounding areas and various workshops of semi and precious stones. <br /> Overnight: Couleur Café
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
          <h3 className="vertical-timeline-element-title">ANTSIRABE – RANOMAFANA</h3>
          <p className='text-justify'>
          In the morning enjoy a guided tour of Antsirabe, the cultural capital of Madagascar. And then, we depart today heading to Ranomafana; stop at Ambositra, the capital of woodcarving. Visit some workshops and then you can go shopping at some shops. After lunch, continue driving to Ranomafana. Stop at Namorona waterfall. <br /> Overnight: Le Grenat
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
          We explore the morning in search of endemic animals. Ranomafana is the only place where we can observe the Golden bamboo lemur, Greater bamboo lemur, Milne Edwards sifaka, and few species of reptiles, satanic leaf-tailed gecko, frogs, and of course birds like the Velvety asity, Crested ibis, and so forth. After the visit, lunch and then we depart to Fianarantsoa, capital of the Betsileo tribe. <br /> Overnight: Zomatel          </p>
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
          <h3 className="vertical-timeline-element-title">FIANARANTSOA – ISALO</h3>
          <p className='text-justify'>
          This morning, we leave Fianarantsoa heading southwards to Ambalavao. We visit a workshop making paper fabric and then the zebu market to see locals doing their deals. And then, we continue to Anja reserve home of the ring-tail lemurs. We visit this reserve and then after lunch, we descend into the west coast region leading to Isalo where the scenery changes to open savannah grasslands with zebu herds. <br /> Overnight: H1 Hotel
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
          <h3 className="vertical-timeline-element-title">ISALO VISIT</h3>
          <p className='text-justify'>
          We start the hike following the trail that unveils impressive canyons. The trekking leads to the famous “La Piscine Naturelle”, a natural swimming pool fed by crystal clear streams. You can spend few moments to refresh (do not forget your swimming gear in case tempted). Then, we continue our hike following the “Namaza trail”, leading to the camping site where three species of lemurs (the browns, the ring-tails and the dancing sifakas) drop by expecting food and come for drink. <br /> Overnight: H1 Hotel
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
          <h3 className="vertical-timeline-element-title">ISALO – IFATY</h3>
          <p className='text-justify'>
          After breakfast, we drive to Tuléar, the capital of the Vezo fishing people. On our way, we will cross one the numerous villages formed by the sapphire rush. Besides, the famous Mahafaly tombs abound all along the way between Sakaraha and Tuléar, having distinct cultural traits of this typical southern tribe, whose tombs display images that represent the daily life or dreams of the deceased. We shall have lunch in Tuléar and then continue driving to Ifaty. <br /> Overnight: La Mira
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
          <h3 className="vertical-timeline-element-title">IFATY</h3>
          <p className='text-justify'>
          You have full day at leisure during your whole stay in Ifaty. However, some activities can be arranged by your hotel, on your charge. Ifaty grants you a relaxing place by the beach where you can go diving, snorkeling, taking a dugout canoe ride with the Vezo fishermen. Besides, Ifaty spiny forest abounded by extraordinary vegetation of euphorbia, didieracea, and aloes is another important place to see the giant baobabs, the nocturnal southern sportive lemurs, some endemic birds like the Sub-desert mesite, the Running coua found nowhere else. <br /> Overnight: La Mira
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
          <h3 className="vertical-timeline-element-title">IFATY – TANA</h3>
          <p className='text-justify'>
          Depart back to Tuléar and then transfer to the airport for flight back to Tana. And then, upon arrival, you will be transferred to your hotel. <br /> Overnight: Le Grand Urban Hotel
          </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 12"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">FLY BACK TO HOME</h3>
          <p className='text-justify'>
          This morning, we shall have an ample time for city tour visiting some places including the queen palaces, picturesque cathedral, the lake Anosy and the famous Digue handicraft market for souvenirs made from raffia, woodcarvings, semi-precious stones, and so forth. Then, drive to the airport for flight taking you back home.
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

export default MadaSouthernSafari