import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rs1gfyr",
        "template_hy1t7io",
        form.current,
        "eudBta3VwZh2OFPRH"
      )
      .then(
        (result) => {
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                An adept professional with diverse expertise across the car rental industry, proficient in research, development, and specialized learning. Committed to optimizing operations and exceeding customer expectations through our service.
              </p>
              <a href="tel:7218584951">
                <i className="fa-solid fa-phone"></i>&nbsp; (+91) 7218584951
              </a>
              <a href="tel:8600967082">
                <i className="fa-solid fa-phone"></i>&nbsp; (+91) 8600967082
              </a>
              <a href="mailto:Ganeshsarak53@gmail.com">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                Ganeshsarak53@gmail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>Godrej 24, Hinjawadi Phase 1 Rd, Phase 1, Hinjawadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Pimpri-Chinchwad, Maharashtra 411057.
              </a>
            </div>

            {/**
             * 
             * Form
             * 
             *  */}

            <div className="contact-div__form">
              <form ref={form} onSubmit={handleSubmit}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: "Jon Doe"' name="from_name"></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com" name="from_email"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.." name="message"></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Book a car by getting in touch with us</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(+91) 7218584951</h3>
                <h3>(+91) 8600967082</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
