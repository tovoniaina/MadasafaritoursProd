import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import '../css/ContactForm.css'
import { Send } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StoreIcon from '@mui/icons-material/Store';



const ContactForms = () => {
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
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    sendData(data)
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
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
    } catch (e) {
      console.log(e);
    }
  };

  //Copy data from form to Airtable
  const sendData = async (data) => {
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/aristide371/airtable/WvYclijKYrNkswKj?tableName=Contact",
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


  return (
    <div className='ContactForm pt-5 tana'>
      <div className='container'>
        <div>
          <h4 className='text-center'>Madasafaritours - Travel agency</h4>
          <p>
            Madagascar Safari tours' service representatives are available to answer your questions and take your reservations, Monday - Friday from 9 am - 6pm and Saturday from 9am - 2pm local time +GMT
            <br />
            Your travel agent may also be able to answer any questions and can make your reservations for you.
          </p>
        </div>
        <div className='row'>
          <div className="col-lg-4 col-md-12 col-sm-12 partieGauche">


            <p><StoreIcon />Licensed by the Tourism minister <br /> No: 019-MINTOUR/SG/DGDT/DAIT/SAT-EDBM.18</p>
            <p className='partieGauche'><a href="https://g.page/r/CedDYYYAub90EBA"> <LocationOnIcon />IVM 104 VZ Antetezanaafovoany I - Antananarivo 101 </a> </p>
            Written inquiries can be mailed to the following address: <br />
            <p className='partieGauche'><a href="mailto:aristide@madasafaritours.com"> <MailIcon /> aristide@madasafaritours.com </a></p>
            <p className='partieGauche'><a href="tel:+261 34 70 208 20"> <WhatsAppIcon /> +261 34 70 208 20</a> </p>

          </div>
          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className='col-12 text-center'>
              <div className='contactForm'>
                <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Row 1 of form */}
                  <div className='row formRow my-3'>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                      <input
                        type='text'
                        name='name'
                        {...register('name', {
                          required: {
                            value: true,
                            message: 'Please enter your First and lastname'
                          },
                          maxLength: {
                            value: 60,
                            message: 'Please use 60 characters or less'
                          }
                        })}
                        className='form-control formInput formInputLastName'
                        placeholder='FirstName & LastName'

                      ></input>
                      {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12'>
                      <input
                        type='email'
                        name='email'
                        {...register('email', {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        })}
                        className='form-control formInput'
                        placeholder='Email address'
                      ></input>
                      {errors.email && (
                        <span className='errorMessage'>Please enter a valid email address</span>
                      )}
                    </div>

                  </div>
                  {/* Row 2 of form */}
                  <div className='row formRow my-3'>
                    <div className='col'>
                      <input
                        type='text'
                        name='subject'
                        {...register('subject', {
                          required: {
                            value: true,
                            message: 'Please enter a subject'
                          },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters'
                          }
                        })}
                        className='form-control formInput'
                        placeholder='Subject of your request'
                      ></input>
                      {errors.subject && (
                        <span className='errorMessage'>{errors.subject.message}</span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row formRow my-3'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='message'
                        {...register('message', {
                          required: true
                        })}
                        className='form-control formInput'
                        placeholder='Describe here all your detailled informations about your requests'
                      ></textarea>
                      {errors.message && <span className='errorMessage'>Please enter a message</span>}
                    </div>
                  </div>

                  <button className='submit-btn BtnBookNow' disabled={disabled} type='submit'>
                    Submit <Send />
                  </button>
                </form>
              </div>

            </div>
          </div>

        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForms;