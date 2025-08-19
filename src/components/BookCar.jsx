import { useEffect, useState, useRef } from "react";
import baleno from "../images/cars-big/baleno.png";
import vento_2017 from "../images/cars-big/vento_2017.png";
import Ertiga_2018 from "../images/cars-big/Ertiga.png";
import swift_2017 from "../images/cars-big/Swift.png";
import tempo_traveller_2023 from "../images/cars-big/tempo_traveller.png";
import xcent_2018 from "../images/cars-big/xcent.png";
import polo_2018 from "../images/cars-big/Polo.png";
import ertiga_vxi_2020 from "../images/cars-big/Ertiga_VXI.png";
import xl6_2021 from "../images/cars-big/xl6_2021.png";
import thar_black from "../images/cars-big/thar_black.png";
import brezza_white from "../images/cars-big/brezza_white.png";

function BookCar() {
  const [modal, setModal] = useState(false);
  const form = useRef();

  // booking car
  const [carType, setCarType] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [pickTime, setPickTime] = useState("");
  const [toLocationTime, setToLocationTime] = useState("");

  // modal infos
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipCode] = useState("");

  // image mapping
  const carImages = {
    "Mahindra Thar Black": thar_black,
    "Maruti Suzuki Brezza White": brezza_white,
    "Baleno Zeta": baleno,
    "VW Vento": vento_2017,
    "Ertiga 2017": Ertiga_2018,
    "Swift": swift_2017,
    "Tempo Traveller": tempo_traveller_2023,
    "Xcent": xcent_2018,
    "Polo": polo_2018,
    "Ertiga VXI": ertiga_vxi_2020,
    "XL6": xl6_2021,
  };

  // handlers
  const handleCar = (e) => setCarType(e.target.value);
  const handlePick = (e) => setPickUp(e.target.value);
  const handleDrop = (e) => setToLocation(e.target.value);
  const handlePickTime = (e) => setPickTime(e.target.value);
  const handletoLocationTime = (e) => setToLocationTime(e.target.value);

  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleAddress = (e) => setAddress(e.target.value);
  const handleCity = (e) => setCity(e.target.value);
  const handleZip = (e) => setZipCode(e.target.value);

  // open modal when all inputs are fulfilled
  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (!pickUp || !toLocation || !pickTime || !toLocationTime || !carType) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  // disable page scroll when modal is displayed
  useEffect(() => {
    document.body.style.overflow = modal ? "hidden" : "auto";
  }, [modal]);

  // confirm modal booking
  const confirmBooking = async (e) => {
    e.preventDefault();

    const noOfDays = date_diff_in_days(pickTime, toLocationTime);

    const formData = new FormData();
    formData.append("service_id", "service_rs1gfyr");
    formData.append("template_id", "template_hy1t7io");
    formData.append("user_id", "eudBta3VwZh2OFPRH");
    formData.append("from_name", `${name} ${lastName}`);
    formData.append("toLocation", `${toLocation}`);
    formData.append("to_name", "Team Sadguru Balumama Self Drive Cars");
    formData.append("for_days", `${noOfDays}`);
    formData.append(
      "message",
      `Booking Details:
      - Total ${noOfDays} Days Trip
      - Car Type: ${carType}
      - Pick-up Location: ${pickUp}
      - Destination Location: ${toLocation}
      - Pick-up Date: ${pickTime}
      - Return Date: ${toLocationTime}
    
      Customer's Information:
      - Name: ${name} ${lastName}
      - Email: ${email}
      - Phone: ${phone}
    `
    );

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send-form",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Email sent successfully");
        form.current.reset();
        setModal(false);
        const doneMsg = document.querySelector(".booking-done");
        doneMsg.style.display = "flex";
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  // hide message
  const hideMessage = () => {
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "none";
  };

  //calculate DateDiff
  const date_diff_in_days = function (date1, date2) {
    const dt1 = new Date(date1);
    const dt2 = new Date(date2);
    return Math.floor(
      (Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) /
      (1000 * 60 * 60 * 24)
    );
  };

  return (
    <>
      <section id="booking-section" className="book-section">
        {/* overlay */}
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form" ref={form}>
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar} name="carType">
                    <option>Select your car type</option>
                    <option value="Mahindra Thar Black">Mahindra Thar Black</option>
                    <option value="Maruti Suzuki Brezza White">Maruti Suzuki Brezza White</option>
                    <option value="Baleno Zeta">Baleno Zeta</option>
                    <option value="VW Vento">VW Vento</option>
                    <option value="Ertiga 2017">Ertiga 2017</option>
                    <option value="Swift">Swift</option>
                    <option value="Tempo Traveller">Tempo Traveller</option>
                    <option value="Xcent">Xcent</option>
                    <option value="Polo">Polo</option>
                    <option value="Ertiga VXI">Ertiga VXI</option>
                    <option value="XL6">XL6</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick} name="pickUp">
                    <option>Select pick up location</option>
                    <option>Katraj, Pune</option>
                    <option>Bibwewadi, Pune</option>
                    <option>Hinjewadi, Pune</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp;
                    Destination Location <b>*</b>
                  </label>
                  <input
                    id="toLocation"
                    value={toLocation}
                    onChange={handleDrop}
                    type="text"
                    name="toLocation"
                  />
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                    name="pickTime"
                  />
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="toLocationTime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Return Date<b>*</b>
                  </label>
                  <input
                    id="toLocationTime"
                    value={toLocationTime}
                    onChange={handletoLocationTime}
                    type="date"
                    name="toLocationTime"
                  />
                </div>

                <button onClick={openModal} type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* modal ------------------------------------ */}
      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>

        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive an Email regarding trip
            confirmation.
          </h4>
        </div>

        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time" required />
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Return/Departure Date & Time</h6>
                  <p>
                    {toLocationTime} /{" "}
                    <input type="time" className="input-time" required />
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Destination</h6>
                  <p>{toLocation}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Trip in Days</h6>
                  <p>{date_diff_in_days(pickTime, toLocationTime)}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Vehicle: </span> {carType}
            </h5>
            {carType && carImages[carType] && (
              <img src={carImages[carType]} alt="car_img" />
            )}
          </div>
        </div>

        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form" ref={form} onSubmit={confirmBooking}>
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                  name="senderFirstName"
                  required
                />
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                  name="senderLastName"
                  required
                />
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                  name="senderPhone"
                  required
                />
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                  required
                />
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                  name="senderEmail"
                  required
                />
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                  required
                />
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                  required
                />
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                  required
                />
              </span>
            </div>

            <div className="reserve-button">
              <button>Reserve Now</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookCar;
