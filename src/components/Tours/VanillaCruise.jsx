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



function VanillaCruise() {
  return (
    <div className='container itineraries'>
      <h1 className='text-center'>Vanilla Cruise itinerary</h1>
      <div className="row">
      <div className="col price-itinerary"><button className='PriceTours btn '><MonetizationOnIcon /> Price $2660/pax</button> </div>
        <div className="col"> <BookModal /> </div>
      </div>

      <hr />
      <div className='row text-center '>
        <div className="col"><span className="badge text-dark"> <MyLocationIcon />NorthEast</span></div>
        <div className="col"> <span className="badge text-dark"><AvTimerIcon /> 14 Days</span> </div>
        <div className="col"><span className="badge text-dark"><MonetizationOnIcon /> From $2660/pax</span></div>
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
          You will be met by one of our team to welcome you at the international airport of Ivato. Then, you will be transferred in a private car taking you to your hotel settled in downtown. <br /> Overnight: Chalet des Roses
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
          This morning, we drive to Andasibe, roughly 4 hour drive. There are some stops en route. Upon arrival, immediate drive heading to Vakona reserve, where five species of lemurs are happy for photo-op. the Black and white ruffed lemur, Common brown lemurs, Eastern bamboo lemurs, Dancing sifakas, the Ring-tails known as the Maki catta are freely leaping around this tiny island. After the visit, settle in your hotel. <br /> Overnight: Andasibe Hotel
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
          After breakfast, you will spend the morning exploring the Analamazoatra reserve where the Indri and other species of lemurs, birds, reptiles and so forth dwell in this primary and secondary forest. Analamazoatra is where the indri indri, the largest species of lemur, with eerie haunting calls echo and heard miles away from your hotel. <br /> Overnight: Andasibe Hotel          </p>
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
          <h3 className="vertical-timeline-element-title">ANDASIBE – MAHANORO</h3>
          <p className='text-justify'>
          We depart as early as possible heading east toward Mahanoro. The landscape is so stunning. So, stops along the road. We shall reach Mahanoro early evening. This is the starting point for our boat ride along the Pangalanes Canal, a new experience to learn more about Madagascar and its rural life. <br /> Overnight: Le Prestige        
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
          <h3 className="vertical-timeline-element-title">MAHANORO – NOSY VARIKA</h3>
          <p className='text-justify'>
          As early as possible, leave Mahanoro and then embark on a boat taking you to Nosy Varika. The ride is rewarding though a bit long and tiresome. However, the landscape along the canal is extraordinary with lots of birds including the Madagascar red fody, Black-crowned night herons, terns, Madagascar coucal, etc. Besides, we have some stops along the way including a visit at a vanilla plantation, the right moment to learn about how the local farmers grow vanilla. Also, other visits include a stop at a rural village, visiting a school, local traditional houses, etc. Settle in your hotel for overnight: Le Petit Oasis
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
          <h3 className="vertical-timeline-element-title">NOSY VARIKA – MANANJARY	</h3>
          <p className='text-justify'>
          After breakfast, we board on the boat continuing our ride which may take roughly 8 to 10 hours. We have lunch in a boat. The ride provides a good chance to experience rural Malagasy life, traditions, culture, visits of certain places, and so forth. Also, along the canal, birds abound and Red fody tend to serenade travelers. <br /> Overnight: Sorafa Hotel
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
          <h3 className="vertical-timeline-element-title">MANANJARY – RANOMAFANA	</h3>
          <p className='text-justify'>
          We set off heading toward Ranomafana national park. This park is home of the endangered Golden bamboo lemur, Great bamboo lemur and other animals endemic in this park without forgetting lots of reptiles and birds nesting in this area. Evening safari walk can be arranged. <br /> Overnight: Karibo Hotel 
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
          <h3 className="vertical-timeline-element-title">RANOMAFANA VISIT – FIANARANTSOA</h3>
          <p className='text-justify'>
          We have a visit in the park in hope to explore a great deal of animals, several species of birds, 12 species of lemur and 90 species of butterflies. Besides, there are 98 species of amphibians and 62 species of reptiles such as chameleons, satanic leaf-tailed gecko, ring-tailed mangoose, and so on. After the visit, we depart to Fianarantsoa, the capital of the Betsileo tribe. <br /> Overnight: Villa Sylvestre     </p>
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
          <h3 className="vertical-timeline-element-title">FIANARANTSOA – ISALO</h3>
          <p className='text-justify'>
          After breakfast, we drive southwards, contemplating sceneries influenced by dramatic open plains and lots of cluttered small traditional villages perched on hillside. Stop at Ambalavao visiting the paper fabric of Antemoro, and then the zebu market (on Wednesdays and Thursday mornings). After the visit, continue toward Anja community reserve, home of the ring-tails, and the largest chameleon as well as the tiny ground chameleon. After the visit, lunch and then depart to Isalo national park. <br /> Overnight: Orchidée Hotel </p>
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
          <h3 className="vertical-timeline-element-title">ISALO VISIT</h3>
          <p className='text-justify'>
          We will have a full day hike in Isalo National Park heading to the ‘Piscine Naturelle’ where you can spend few moments swimming. A classic walk is very rewarding granting a dramatic view of the so-called ‘Grand Canyon’. Besides, we hike following the Namaza trail (4 km) leading to the camping site where three species of lemurs (ring-tails, the browns and the sifakas) drop by in search of food and come for drink. Picnic lunch, and then, continue hiking upwards leading to the ‘Piscine Bleue and Piscine Noire’ (blue and black pool) and another short hike reaching the ‘Cascade de Nymphe’, fed by natural streams that refreshes the heat. After the long hike, we head back to our hotel. <br /> Overnight: Orchidée Hotel </p>
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
          <h3 className="vertical-timeline-element-title">ISALO – IFATY	</h3>
          <p className='text-justify'>
          After breakfast, leave Isalo and depart to Ifaty. There will be some stops en route, with photo of the baobab forest, and bunch of traditional Mahafaly tombs observed all along the drive toward Tuléar, the capital of the Vezo fishing people. The Mahafaly tombs have distinct cultural traits of this typical southern tribe displaying images that represent the daily life or dreams of the deceased. We shall have lunch in Tuléar and then continue driving to Ifaty. <br /> Overnight: Belle Vue</p>
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
          <h3 className="vertical-timeline-element-title">IFATY</h3>
          <p className='text-justify'>
          The whole day is yours at leisure. However, there are lots of activities that can be organized by your hotel such as snorkeling, diving or visiting the spiny forest and many more. <br /> Overnight: Belle Vue </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Day 13"
          dateClassName = "dayCounter"
          contentStyle={{ background: 'var(--primary-grey)', color: 'var(--primary-orange)' }}
          contentArrowStyle={{ borderRight: '7px solid  var(--primary-grey)' }}
          iconStyle={{ background: 'var(--primary-grey)', color: '#fff' }}
          icon={<FlightTakeoffIcon />}
        >
          <h3 className="vertical-timeline-element-title">IFATY – TANA</h3>
          <p className='text-justify'>
          Depart to Tuléar and transfer to the airport for flight heading back to Tana. <br /> Overnight: Chalet des Roses</p>
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
          Your last day this morning in Madagascar grants you a city tour as well as opportunities to explore the sights and life in Antananarivo. Depending on time departure, visit the Zoma (the large traditional market of Tana) and the palace, the old picturesque cathedral, etc to feel and learn about the Malagasy cultures. Then, you will be transferred to the airport for your flight back home.          </p>
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
      <div className="col price-itinerary"><button className='PriceTours btn '><MonetizationOnIcon /> Price $2660/pax</button> </div>
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

export default VanillaCruise