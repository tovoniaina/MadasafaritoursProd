import React, { useState } from 'react'
import { Send } from '@mui/icons-material';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import Indri from '../images/imagesMst/indri.jpeg';
import EasternWonder from '../images/imagesMst/EasternWonder.webp';
import DivingTour from '../images/imagesMst/DivingTour.webp'
import DryDeciduousBirding from '../images/imagesMst/DryDeciduousBirding.webp'
import RainForestBirding from '../images/imagesMst/RainForestBirding.webp'
import BaobabSafari from '../images/imagesMst/BaobabSafari.webp'
import VanillaCruise from '../images/imagesMst/VanillaCruise.webp'
import MadaNorthernSafari from '../images/imagesMst/MadaNorthernSafari.webp'
import TanaSurrounding from '../images/imagesMst/TanaSurrounding.webp'
import SouthernTrekking from '../images/imagesMst/SouthernTrekking.webp'
import MadaSouthernSafari from '../images/imagesMst/MadaSouthernSafari.webp'
import MarvellousHoneymoonSafari from '../images/imagesMst/MarvellousHoneymoonSafari.webp'
import MalagasyCultureDiscovery from '../images/imagesMst/MalagasyCultureDiscovery.webp'
import RiverTrip from '../images/imagesMst/RiverTrip.webp'
import MyLocationIcon from '@mui/icons-material/MyLocation';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupsIcon from '@mui/icons-material/Groups';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CancelIcon from '@mui/icons-material/Cancel';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import PersonIcon from '@mui/icons-material/Person';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LanguageIcon from '@mui/icons-material/Language';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function TourHighlightsCard() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    // const handleCloseDialog = () => {
    //     setOpen(false)
    // };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const [disabled, setDisabled] = useState(false);

    // Function that displays a success toast on bottom right of the page when form submission is successful
    const toastifySuccess = () => {
        toast('Your request has been sent successfully', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            className: 'submit-feedback success',
            toastId: 'notifyToast'
        });
    };

    // Function called on submit that uses emailjs to send email of valid contact form
    const onSubmit = async (data) => {
        // Destrcture data object
        const { firstName, lastName, email, country, whatsappNumber, numberOfPerson, tours, arrivalDate, departureDate, message } = data;
        sendData(data)
        try {
            // Disable form while processing submission
            setDisabled(true);

            // Define template params
            const templateParams = {
                firstName,
                lastName,
                email,
                country,
                whatsappNumber,
                numberOfPerson,
                tours,
                arrivalDate,
                departureDate,
                message
            };

            emailjs.send('service_wbcqhdh', 'template_copj82l', templateParams, 'GwFaGFV-0KNwOLU8T')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                }, function (error) {
                    console.log('FAILED...', error);
                });

            // Reset contact form fields after submission
            reset();
            // Display success toast
            toastifySuccess();
            // Re-enable form submission
            setDisabled(false);

            //Close the dialog after submission of the form
            // handleCloseDialog(true);
            setOpen(false);

        } catch (e) {
            console.log(e);
        }


    };

    //Copy data to Airtable

    const sendData = async (data) => {
        try {
            const response = await fetch(
                "https://v1.nocodeapi.com/aristide371/airtable/WvYclijKYrNkswKj?tableName=Booking",
                {
                    method: "post",
                    body: JSON.stringify([data]),
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            const json = await response.json()
            console.log("Success:", JSON.stringify(json))
            // setMessage("Success")
        } catch (error) {
            console.error("Error:", error)
            // setMessage("Error")
        }
    }
    const [showMore, setShowMore] = useState();

    const tours = [
        {
            title: 'Indri Encounters',
            img: Indri,
            description: "The Indri, also called Babakoto, is a species of lemuriform primates belonging to the family Indriidae. With the diademed sifaka, the indri has the title of the largest living lemur. It is diurnal, arboreal and, like all lemurs, endemic to eastern Madagascar.",
            price: "From $800/pax",
            location: 'East',
            timer: "4 Days",
            learnMore: '/indri-encouter',
        },
        {
            title: 'Eastern wonder',
            img: EasternWonder,
            description: "The eastern part of Madagascar is known for its humid climate and the rains are very frequent. It still shelters the majority of the primary forests of Madagascar and not to forget the various species of lemurs which are almost endemic to Madagascar.",
            price: "From $1330/pax",
            location: 'East',
            timer: "7 Days",
            learnMore: '/eastern-wonder',
        },
        {
            title: 'Diving Tour',
            img: DivingTour,
            description: "Let yourself be carried away in the seaside resort of Madagascar, Nosy Be is a paradise island that offers a picturesque landscape for diving lovers, it is an ideal place to enjoy diving.",
            price: "From $1700/pax",
            location: 'NorthWest',
            timer: "9 Days",
            learnMore: '/diving-tour',
        },
        {
            title: 'Dry Deciduous Birding',
            img: DryDeciduousBirding,
            description: "The spiny and dry forest zones of Madagascar are home to a wide variety of endemic birds and lemurs while the reptile diversity is also excellent.",
            price: "From $1980/pax",
            location: 'West',
            timer: "11 Days",
            learnMore: '/dry-deciduous-birding',
            quote: ""
        },
        {
            title: 'Rain Forest Birding',
            img: RainForestBirding,
            description: "This birdwatching tour in Andasibe in the heart of the east the rainforest is a short tour but offers birders and photographs maximum satisfaction. The Andasibe Perinet Mantadia Ananalazaotra Rainforest and Primary Forest is a better bird habitat, home to 112 bird species that you can see there if we only talk about Kingfisher, Madagascar Crested Ibis, Helmeted, Nuthach Vanga, Madagascar Blue Coua, Red Fronted Coua, Madagascar Pigmy, Ground Roler, Scally Ground Roler",
            price: "From $1800/pax",
            location: 'East',
            timer: "10 Days",
            learnMore: '/rainforest-birding',
        },
        {
            title: 'Vanilla Cruise',
            img: VanillaCruise,
            description: "The Vanilla cruise allows you to enjoy the east coast of Madagascar by boat, you will discover a variety of landscapes typical of the east coast which is still home to the primary forest of Madagascar and we do not forget to visit several parks there",
            price: "From $2660/pax",
            location: 'NorthEast',
            timer: "14 Days",
            learnMore: '/vanilla-cruise',
        },
        {
            title: 'Baobab Safari',
            img: BaobabSafari,
            description: "Let the wilderness of Morondava dazzle you! You will be amazed by the landscape and the Baobab Alley, not only that you will visit the Tsingy which is one of the most impressive Natural Geo-Structure you will see. Don’t hesitate anymore, we will wait you then.",
            price: "From $1400/pax",
            location: 'West',
            timer: "7 Days",
            learnMore: '/safari',
        },
        {
            title: 'Mada Northern Safari',
            img: MadaNorthernSafari,
            description: "The North is full of mystery and Beautiful landscape with one of the clearest beach in Madagascar that is Diego Suarez Beach and Nosy Be, enjoy the local fresh seafood and the beautiful Beach. It’s normal that some celebrities have already made vacations at Nosy be, you will not be deceived!!",
            price: "From $1700/pax",
            location: 'North',
            timer: "9 Days",
            learnMore: '/mada-northern-safari',
        },
        {
            title: 'Tana Surrounding',
            img: TanaSurrounding,
            description: "Antananarivo, the city of the Thousand, enjoy the Old architecture of the Queen Palace and the Malagasy version of the Liberty Statue the “Anjely Mainty”, Learn about this capital full of history!",
            price: "From $800/pax",
            location: 'HighLand',
            timer: "4 Days",
            learnMore: '/tana-surrounding',
        },
        {
            title: 'Southern Trekking',
            img: SouthernTrekking,
            description: "Discover the southern part of Madagascar with its great diversity in both culture and landscape, you will discover several national parks and get ready to trek.",
            price: "From $3060/pax",
            location: 'South',
            timer: "17 Days",
            learnMore: '/southern-trekking',
        },
        {
            title: 'Mada Southern Safari',
            img: MadaSouthernSafari,
            description: "The Road to the South of Madagascar is full of Surprise, wether it is the luxurious Andasibe National Park or the city of Antsirabe which seems like an Old Picture from the Colonial Age. Let you be fascinated by the charm of Fianar and the Natural park you will see like Ranomafana and Ifaty.",
            price: "From $2160/pax",
            location: 'South',
            timer: "12 Days",
            learnMore: '/mada-southern-safari',
        },
        {
            title: 'Post Wedding Safari',
            img: MarvellousHoneymoonSafari,
            description: "Congratulations! for your Honeymoon you will see most of the must see destination when you Travel to Madagascar, the Andasibe National park and the Full visit of Nosy Be, which have the most beautiful beach of the Island, you will not be deceived.",
            price: "From $2000/pax",
            location: 'NorthWest',
            timer: "10 Days",
            learnMore: '/post-wedding-safari',
        },
        {
            title: 'Malagasy Culture Discovery',
            img: MalagasyCultureDiscovery,
            description: "Madagascar is fascinating due to its biodiversity but also by its cosmopolitan culture, with origins from both Asia and Africa. “The Great Island” will not fail to amaze you, and its welcoming and friendly people will accompany you into discovering its island through tradition and the know-how of its culture.",
            price: "From $1900/pax",
            location: 'SouthEast',
            timer: "10 Days",
            learnMore: '/malagasy-culture-discovery',
        },
        {
            title: 'River Trip',
            img: RiverTrip,
            description: "Embark on a boat to navigate the 400 km of successive rivers. The Pangalanes offer a total change of scenery, to live in the middle of a luxuriant vegetation containing a rich biodiversity. The locals and in particular the pirogues will accompany you in your journey to discover all the corners of the Pangalanes canal.",
            price: "From $2000/pax",
            location: 'SouthEast',
            timer: "10 Days",
            learnMore: '/river-trip',
        }

    ]
    return (

        <div className="Services my-5">
            <Dialog open={open}>


                <DialogTitle className='modalBookNow' id="staticBackdrop"> Booking form - Travelia Safari </DialogTitle>

                <DialogContent className='my-3'>
                    <DialogContentText className='dialogBookModal'>

                        <form onSubmit={handleSubmit(onSubmit)} noValidate>
                            <div className="mb-4 input-group">
                                <span className="input-group-text"> <PersonIcon /> </span>
                                <input
                                    type="text"
                                    name='firstName'
                                    id="recipient-name"
                                    {...register('firstName', {
                                        required: {
                                            value: true,
                                            message: 'Please enter your FirstName'
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'Please use 30 characters or less'
                                        }
                                    })}
                                    className="form-control nameModal"
                                    placeholder='FirstName'

                                >
                                </input>
                                <div className='input-group mb-4'>{errors.firstName && <span className='errorMessage'>{errors.firstName.message}</span>}</div>

                                {/* <span className='mx-2'></span> */}
                                <span className="input-group-text"> <PersonIcon /> </span>
                                <input
                                    type="text"
                                    name='lastName'
                                    id="recipient-name"
                                    {...register('lastName', {
                                        required: {
                                            value: true,
                                            message: 'Please enter your lastName'
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'Please use 30 characters or less'
                                        }
                                    })}
                                    className="form-control nameModal"
                                    placeholder='LastName'
                                />
                                <div className="input-group">{errors.lastName && <span className='errorMessage'>{errors.lastName.message}</span>}</div>

                            </div>

                            <div className="mb-4 input-group">
                                <span className="input-group-text"> <MailOutlineIcon /> </span>
                                <input
                                    type="email"
                                    name='email'
                                    id="recipient-name"
                                    {...register('email', {
                                        required: true,
                                        pattern:
                                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                    })}
                                    className="form-control nameModal"
                                    placeholder='example@email.com'
                                />
                                {errors.email && (
                                    <div className="input-group"><span className='errorMessage'>Please enter a valid email address</span></div>
                                )}
                            </div>

                            <div className="input-group mb-4">
                                <span className="input-group-text"> <LanguageIcon /> </span>

                                <select id="country" name="country" className='form-control'
                                    {...register('country', {
                                        required: true,
                                    })}
                                >
                                    <option>Select your Country</option>
                                    <option value="Afghanistan">Afghanistan</option>
                                    <option value="Aland Islands">Aland Islands</option>
                                    <option value="Albania">Albania</option>
                                    <option value="Algeria">Algeria</option>
                                    <option value="American Samoa">American Samoa</option>
                                    <option value="Andorra">Andorra</option>
                                    <option value="Angola">Angola</option>
                                    <option value="Anguilla">Anguilla</option>
                                    <option value="Antarctica">Antarctica</option>
                                    <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Armenia">Armenia</option>
                                    <option value="Aruba">Aruba</option>
                                    <option value="Australia">Australia</option>
                                    <option value="Austria">Austria</option>
                                    <option value="Azerbaijan">Azerbaijan</option>
                                    <option value="Bahamas">Bahamas</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Barbados">Barbados</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Belgium">Belgium</option>
                                    <option value="Belize">Belize</option>
                                    <option value="Benin">Benin</option>
                                    <option value="Bermuda">Bermuda</option>
                                    <option value="Bhutan">Bhutan</option>
                                    <option value="Bolivia">Bolivia</option>
                                    <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                                    <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                    <option value="Botswana">Botswana</option>
                                    <option value="Bouvet Island">Bouvet Island</option>
                                    <option value="Brazil">Brazil</option>
                                    <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                                    <option value="Bulgaria">Bulgaria</option>
                                    <option value="Burkina Faso">Burkina Faso</option>
                                    <option value="Burundi">Burundi</option>
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Cameroon">Cameroon</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Cape Verde">Cape Verde</option>
                                    <option value="Cayman Islands">Cayman Islands</option>
                                    <option value="Central African Republic">Central African Republic</option>
                                    <option value="Chad">Chad</option>
                                    <option value="Chile">Chile</option>
                                    <option value="China">China</option>
                                    <option value="Christmas Island">Christmas Island</option>
                                    <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="Comoros">Comoros</option>
                                    <option value="Congo">Congo</option>
                                    <option value="Congo, Democratic Republic of the Congo">Congo, Democratic Republic of the Congo</option>
                                    <option value="Cook Islands">Cook Islands</option>
                                    <option value="Costa Rica">Costa Rica</option>
                                    <option value="Cote D'Ivoire">Cote D'Ivoire</option>
                                    <option value="Croatia">Croatia</option>
                                    <option value="Cuba">Cuba</option>
                                    <option value="Curacao">Curacao</option>
                                    <option value="Cyprus">Cyprus</option>
                                    <option value="Czech Republic">Czech Republic</option>
                                    <option value="Denmark">Denmark</option>
                                    <option value="Djibouti">Djibouti</option>
                                    <option value="Dominica">Dominica</option>
                                    <option value="Dominican Republic">Dominican Republic</option>
                                    <option value="Ecuador">Ecuador</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="El Salvador">El Salvador</option>
                                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                                    <option value="Eritrea">Eritrea</option>
                                    <option value="Estonia">Estonia</option>
                                    <option value="Ethiopia">Ethiopia</option>
                                    <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                    <option value="Faroe Islands">Faroe Islands</option>
                                    <option value="Fiji">Fiji</option>
                                    <option value="Finland">Finland</option>
                                    <option value="France">France</option>
                                    <option value="French Guiana">French Guiana</option>
                                    <option value="French Polynesia">French Polynesia</option>
                                    <option value="French Southern Territories">French Southern Territories</option>
                                    <option value="Gabon">Gabon</option>
                                    <option value="Gambia">Gambia</option>
                                    <option value="Georgia">Georgia</option>
                                    <option value="Germany">Germany</option>
                                    <option value="Ghana">Ghana</option>
                                    <option value="Gibraltar">Gibraltar</option>
                                    <option value="Greece">Greece</option>
                                    <option value="Greenland">Greenland</option>
                                    <option value="Grenada">Grenada</option>
                                    <option value="Guadeloupe">Guadeloupe</option>
                                    <option value="Guam">Guam</option>
                                    <option value="Guatemala">Guatemala</option>
                                    <option value="Guernsey">Guernsey</option>
                                    <option value="Guinea">Guinea</option>
                                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                                    <option value="Guyana">Guyana</option>
                                    <option value="Haiti">Haiti</option>
                                    <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                    <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                    <option value="Honduras">Honduras</option>
                                    <option value="Hong Kong">Hong Kong</option>
                                    <option value="Hungary">Hungary</option>
                                    <option value="Iceland">Iceland</option>
                                    <option value="India">India</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Ireland">Ireland</option>
                                    <option value="Isle of Man">Isle of Man</option>
                                    <option value="Israel">Israel</option>
                                    <option value="Italy">Italy</option>
                                    <option value="Jamaica">Jamaica</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Jersey">Jersey</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Kazakhstan">Kazakhstan</option>
                                    <option value="Kenya">Kenya</option>
                                    <option value="Kiribati">Kiribati</option>
                                    <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                    <option value="Korea, Republic of">Korea, Republic of</option>
                                    <option value="Kosovo">Kosovo</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                                    <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                    <option value="Latvia">Latvia</option>
                                    <option value="Lebanon">Lebanon</option>
                                    <option value="Lesotho">Lesotho</option>
                                    <option value="Liberia">Liberia</option>
                                    <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                    <option value="Liechtenstein">Liechtenstein</option>
                                    <option value="Lithuania">Lithuania</option>
                                    <option value="Luxembourg">Luxembourg</option>
                                    <option value="Macao">Macao</option>
                                    <option value="Macedonia, the Former Yugoslav Republic of">Macedonia, the Former Yugoslav Republic of</option>
                                    <option value="Madagascar">Madagascar</option>
                                    <option value="Malawi">Malawi</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Maldives">Maldives</option>
                                    <option value="Mali">Mali</option>
                                    <option value="Malta">Malta</option>
                                    <option value="Marshall Islands">Marshall Islands</option>
                                    <option value="Martinique">Martinique</option>
                                    <option value="Mauritania">Mauritania</option>
                                    <option value="Mauritius">Mauritius</option>
                                    <option value="Mayotte">Mayotte</option>
                                    <option value="Mexico">Mexico</option>
                                    <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                    <option value="Moldova, Republic of">Moldova, Republic of</option>
                                    <option value="Monaco">Monaco</option>
                                    <option value="Mongolia">Mongolia</option>
                                    <option value="Montenegro">Montenegro</option>
                                    <option value="Montserrat">Montserrat</option>
                                    <option value="Morocco">Morocco</option>
                                    <option value="Mozambique">Mozambique</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Namibia">Namibia</option>
                                    <option value="Nauru">Nauru</option>
                                    <option value="Nepal">Nepal</option>
                                    <option value="Netherlands">Netherlands</option>
                                    <option value="Netherlands Antilles">Netherlands Antilles</option>
                                    <option value="New Caledonia">New Caledonia</option>
                                    <option value="New Zealand">New Zealand</option>
                                    <option value="Nicaragua">Nicaragua</option>
                                    <option value="Niger">Niger</option>
                                    <option value="Nigeria">Nigeria</option>
                                    <option value="Niue">Niue</option>
                                    <option value="Norfolk Island">Norfolk Island</option>
                                    <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                    <option value="Norway">Norway</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Pakistan">Pakistan</option>
                                    <option value="Palau">Palau</option>
                                    <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                    <option value="Panama">Panama</option>
                                    <option value="Papua New Guinea">Papua New Guinea</option>
                                    <option value="Paraguay">Paraguay</option>
                                    <option value="Peru">Peru</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Pitcairn">Pitcairn</option>
                                    <option value="Poland">Poland</option>
                                    <option value="Portugal">Portugal</option>
                                    <option value="Puerto Rico">Puerto Rico</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Reunion">Reunion</option>
                                    <option value="Romania">Romania</option>
                                    <option value="Russian Federation">Russian Federation</option>
                                    <option value="Rwanda">Rwanda</option>
                                    <option value="Saint Barthelemy">Saint Barthelemy</option>
                                    <option value="Saint Helena">Saint Helena</option>
                                    <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                    <option value="Saint Lucia">Saint Lucia</option>
                                    <option value="Saint Martin">Saint Martin</option>
                                    <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                    <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                                    <option value="Samoa">Samoa</option>
                                    <option value="San Marino">San Marino</option>
                                    <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="Senegal">Senegal</option>
                                    <option value="Serbia">Serbia</option>
                                    <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                                    <option value="Seychelles">Seychelles</option>
                                    <option value="Sierra Leone">Sierra Leone</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Sint Maarten">Sint Maarten</option>
                                    <option value="Slovakia">Slovakia</option>
                                    <option value="Slovenia">Slovenia</option>
                                    <option value="Solomon Islands">Solomon Islands</option>
                                    <option value="Somalia">Somalia</option>
                                    <option value="South Africa">South Africa</option>
                                    <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                                    <option value="South Sudan">South Sudan</option>
                                    <option value="Spain">Spain</option>
                                    <option value="Sri Lanka">Sri Lanka</option>
                                    <option value="Sudan">Sudan</option>
                                    <option value="Suriname">Suriname</option>
                                    <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                    <option value="Swaziland">Swaziland</option>
                                    <option value="Sweden">Sweden</option>
                                    <option value="Switzerland">Switzerland</option>
                                    <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                    <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                    <option value="Tajikistan">Tajikistan</option>
                                    <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor-Leste">Timor-Leste</option>
                                    <option value="Togo">Togo</option>
                                    <option value="Tokelau">Tokelau</option>
                                    <option value="Tonga">Tonga</option>
                                    <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                    <option value="Tunisia">Tunisia</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="Turkmenistan">Turkmenistan</option>
                                    <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                    <option value="Tuvalu">Tuvalu</option>
                                    <option value="Uganda">Uganda</option>
                                    <option value="Ukraine">Ukraine</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="United States">United States</option>
                                    <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                    <option value="Uruguay">Uruguay</option>
                                    <option value="Uzbekistan">Uzbekistan</option>
                                    <option value="Vanuatu">Vanuatu</option>
                                    <option value="Venezuela">Venezuela</option>
                                    <option value="Viet Nam">Viet Nam</option>
                                    <option value="Virgin Islands, British">Virgin Islands, British</option>
                                    <option value="Virgin Islands, U.s.">Virgin Islands, U.s.</option>
                                    <option value="Wallis and Futuna">Wallis and Futuna</option>
                                    <option value="Western Sahara">Western Sahara</option>
                                    <option value="Yemen">Yemen</option>
                                    <option value="Zambia">Zambia</option>
                                    <option value="Zimbabwe">Zimbabwe</option>
                                </select>


                                {errors.country && (<span className='errorMessage'>Please enter a valid country</span>)}
                            </div>

                            <div className="mb-4 input-group">
                                <span className="input-group-text"> <WhatsAppIcon /> </span>
                                <input
                                    type="text"
                                    name='whatsappNumber'
                                    {...register('whatsappNumber', {
                                        required: true,
                                        pattern:
                                            /^[+0.9]+[0-9]*$/
                                    })}
                                    id="recipient-name"
                                    className="form-control nameModal"
                                    placeholder='Whatsapp number'
                                >
                                </input>

                                <span className='mx-2'></span>
                                <span className="input-group-text"> <GroupsIcon /> </span>
                                <input
                                    type="text"
                                    name='numberOfPerson'
                                    {...register('numberOfPerson', {
                                        required: true,
                                        pattern:
                                            /^[0-9]*$/
                                    })}
                                    id="recipient-name"
                                    className="form-control nameModal"
                                    placeholder='Number of person'
                                >

                                </input>


                            </div>

                            <div className="row">
                                <div className='input-group col msg'>{errors.whatsappNumber && (<span className='errorMessage'>Please enter a valid Whatsapp Number</span>)}</div>

                                <div className='input-group col msg'>  {errors.numberOfPerson && (<span className='errorMessage'>Should be a digit</span>)} </div>
                            </div>


                            <div className="input-group mb-4">
                                <span className="input-group-text"> <LanguageIcon /> </span>

                                <select id="tours" name="tours" className='form-control'
                                    {...register('tours', {
                                        required: true,
                                    })}
                                >
                                    <option>Select your tours</option>
                                    <option value="Indri Encouter">Indri Encouter</option>
                                    <option value="Eastern Wonder">Eastern Wonder</option>
                                    <option value="Diving Tour">Diving Tour</option>
                                    <option value="Dry Deciduous Birding">Dry Deciduous Birding</option>
                                    <option value="Rainforest Birding">Rainforest Birding</option>
                                    <option value="Baobab Safari">Baobab Safari</option>
                                    <option value="Vanilla Cruise">Vanilla Cruise</option>
                                    <option value="Mada Northern Safari">Mada Northern Safari</option>
                                    <option value="Tana Surrounding">Tana Surrounding</option>
                                    <option value="Southern Trekking">Southern Trekking</option>
                                    <option value="Mada Southern Safari">Mada Southern Safari</option>
                                    <option value="Marvellous Honeymoon Safari">Marvellous Honeymoon Safari</option>
                                    <option value="Malagasy Culture Discovery">Malagasy Culture Discovery</option>
                                    <option value="River Trip">River Trip</option>
                                </select>
                                {errors.tours && (<span className='errorMessage'>Please select your tours</span>)}
                            </div>

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="message-text" className="col-form-label">Arrival date:</label>
                                    <input
                                        type="date"
                                        name='arrivalDate'
                                        {...register('arrivalDate', {
                                            required: true
                                        })}
                                        className="form-control nameModal"
                                    />
                                    {errors.arrivalDate && <span className='errorMessage'>Please enter a valid date</span>}

                                </div>

                                <div className="col">
                                    <label htmlFor="message-text" className="col-form-label ">Departure date:</label> <br />
                                    <input
                                        type="date"
                                        name='departureDate'
                                        {...register('departureDate', {
                                            required: true
                                        })}
                                        className="form-control nameModal"
                                    />
                                    {errors.departureDate && <span className='errorMessage'>Please enter a valid date</span>}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message-text" className="col-form-label">Additional information you want to tell us:</label>
                                <textarea
                                    name='message'
                                    {...register('message', {
                                        required: true
                                    })}
                                    className="form-control"
                                    id="message-text"
                                    placeholder='Describe here all your detailled informations about your'
                                ></textarea>
                                {errors.message && <span className='errorMessage'>Please enter a message</span>}
                            </div>
                            <DialogActions>
                                <Button variant='outlined' size='large' className='btnActionBookModal' color='error' onClick={handleClose} autoFocus startIcon={<CancelIcon />}> Cancel </Button>
                                <Button variant='contained' size='large' className='btnActionBookModal' color='success' type="submit" endIcon={<SendIcon />} disabled={disabled}> Book</Button>
                            </DialogActions>


                        </form>
                    </DialogContentText>
                </DialogContent>
                <ToastContainer />


            </Dialog>
            <div className="container">
                <div>
                    <h1>Feel free to select your tour modality</h1>
                </div>

                <div>
                    We have 14 tours modalities, so you can choose wisely the one suits you <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sed saepe explicabo iste ad, quibusdam beatae neque officia dignissimos necessitatibus sapiente voluptate rem nemo repellendus accusantium, a doloremque exercitationem minus.
                    Maxime asperiores placeat sunt laudantium inventore, quaerat dolore assumenda facilis deserunt quos soluta! Voluptates dolore accusamus fugit saepe quod repellendus eum. Iure, autem blanditiis? Repellendus maxime laudantium sed minus qui?
                </div>
                <div className="row">
                    {tours.map((tour, i) => <div key={i} className="col-lg-4 col-md-12 col-sm-12 my-2" >
                        <div className="card">
                            <div className="card-body">
                                <div className="card-icons text-center">

                                </div>
                                <h3 className="card-title text-center">{tour.title}</h3>
                                <div><img className='card-img-top' src={tour.img} alt="" /></div>
                                <p className="card-text">
                                    {showMore === i ? tour.description : `${tour.description.substring(0, 85)}`}{' '}
                                    <button className='buttonShowMore' onClick={() => { showMore === i ? setShowMore(undefined) : setShowMore(i) }}>
                                        {showMore === i ? "Show less" : "Show more"}
                                    </button>
                                </p>

                                <div className='row infoPratique'>
                                    <div className="col"><span className="badge badge-info place"> <MyLocationIcon />{tour.location}</span></div>
                                    <div className="col"> <span className="badge badge-info price"><AvTimerIcon /> {tour.timer}</span> </div>
                                    <div className="col"><span className="badge badge-info price"><MonetizationOnIcon /> {tour.price}</span></div>
                                </div>

                                <div className="button-action">
                                    <button type="button" className="learnMoreBtn"><a href={`/Tour${tour.learnMore}`}>Learn more <Send /></a></button>
                                    <button className="RequestQuoteBtn" variant="contained" onClick={handleClickOpen}> <RequestQuoteIcon />  Ask a quote </button>
                                </div>



                            </div>
                        </div>
                    </div>)}

                </div>
            </div>
        </div>
    )
}

export default TourHighlightsCard
