import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "emailjs-com";
import "react-toastify/dist/ReactToastify.min.css";
import SendIcon from "@mui/icons-material/Send";

const NewsletterBanner = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Congrats! You're subscribed now 😊", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { email } = data;
    sendData(data);
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        email,
      };

      emailjs
        .send(
          "service_wbcqhdh",
          "template_copj82l",
          templateParams,
          "GwFaGFV-0KNwOLU8T"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);

      //Close the dialog after submission of the form
      // handleCloseDialog(true);
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
      );
      const json = await response.json();
      console.log("Success:", JSON.stringify(json));
      // setMessage("Success")
    } catch (error) {
      console.error("Error:", error);
      // setMessage("Error")
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h5 className="text-center">Subscribe to our Newsletter</h5>
        <p className="text-center">
          Want to know we're up to? Sign up for the Newsletter and join our
          tribe
        </p>

        <div className="text-center SubscribeNewsletter">
          <input
            type="email"
            name="email"
            id="recipient-name"
            {...register("email", {
              required: true,
              pattern:
                // /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]/,
            })}
            className="form__field my-3"
            placeholder="example@email.com"
          />

          <button className="btn boutonx" type="submit" disabled={disabled}>
            {" "}
            <SendIcon className="sendIcon" fontSize="small" />
            Subscribe
          </button>
        </div>
        {errors.email && (
          <div className="text-center">
            <span className="text-center errorMsg">
              Please enter a valid email address
            </span>
          </div>
        )}
      </form>

      <ToastContainer />
    </div>
  );
};

export default NewsletterBanner;
