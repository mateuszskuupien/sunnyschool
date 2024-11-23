import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import talktous from "../../assets/talktous.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "85f82d86-c3e9-492f-80a9-cd0797cd6d7d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msg_icon} alt="" />
        </h3>
        <p>
          We'd love to hear from you! Whether you have questions, feedback, or
          just want to learn more about our services, feel free to reach out.
          We’re here to help!
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@SunnySchool.dev
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +48 123 456 789
          </li>
          <li>
            <img src={location_icon} alt="" />
            Addres 54, ul. Miastowa 4, 12-543 Polska
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name.."
            required
          />
          <label>Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address.."
            required
          />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number.."
            required
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message.."
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Talk to us! <img src={talktous} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact
