import { Modal } from "react-bootstrap";
import React, { useRef, useState } from "react";
import NewsLetter from './Newsletter'
export default function Contacts() {
  const initialValue= {
    name:'',
    email:'',
    message:''
  }
  const modalRef = useRef()
    
    const showModal = () => {
        const modalEle = modalRef.current
        const bsModal = new Modal(modalEle)
        bsModal.show()
    }
  const [formData, setFormData] = useState(initialValue);
  const [message, setMessage] = useState("");

  const handleInput = e => {
    // const copyFormData = { ...formData };
    // copyFormData[e.target.name] = e.target.value;
    setFormData({[e.target.name]:e.target.value});
  };

  const onSubmit = async e => {
    e.preventDefault();
 
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/aristide371/airtable/VsMXtNPpivfewLbi?tableName=Contact",
        {
          method: "post",
          body: JSON.stringify([formData]),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
   
      
      const json = response.json();
      
      console.log("Success:", JSON.stringify(json));
      setFormData(initialValue)
      showModal()
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error");
    }
  };
// const onSubmit = (e)=>{
//   sendData(e).then(()=>{setFormData({})})
// }
  return (
    <div className="ContactMst container">
      <form
        className="input-form"
        id="contact"
        name="contact"
        required
        {...{onSubmit}}
       
        >
        <input
          name="name"
          value={formData.name}
          type="text"
          placeholder="Name"
          required
          onChange={handleInput}
        />
        <input
          name="email"
          type="email"
        value={formData.email}
        placeholder="Email"
          required
          onChange={handleInput}
        />
        <textarea name="message" placeholder="Message"
        
        value={formData.message}
        onChange={handleInput} />
        <input name="submit" type="submit" value="Send"  />
        <NewsLetter  ref={modalRef}/>
      </form>
    </div>
  );
}
