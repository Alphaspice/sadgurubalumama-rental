import { useState } from "react";
import CarBox from "./CarBox";
import { CAR_DATA } from "./CarData";

function PickCar() {
  const carButtons = [
    { id: "btn10", label: "Mahindra Thar Black", carID: 0 },
    { id: "btn11", label: "Maruti Suzuki Brezza White", carID: 1 },
    { id: "btn1", label: "Baleno Zeta 2019", carID: 2 },
    { id: "btn2", label: "VolksWagen Vento 2017", carID: 3 },
    { id: "btn3", label: "Ertiga 2017", carID: 4 },
    { id: "btn4", label: "Swift 2018", carID: 5 },
    { id: "btn5", label: "Tempo traveller 2023", carID: 6 },
    { id: "btn6", label: "Xcent 2017", carID: 7 },
    { id: "btn7", label: "Polo 2017", carID: 8 },
    { id: "btn8", label: "Ertiga vxi 2022", carID: 9 },
    { id: "btn9", label: "xl6 2021", carID: 10 },
  ];

  const [active, setActive] = useState(carButtons[0].id);
  const [colorBtn, setColorBtn] = useState(carButtons[0].id);

  const btnID = (id) => {
    setColorBtn(id);
  };

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };

  return (
    <>
      <section className="pick-section">
        <div className="container">
          <div className="pick-container">
            <div className="pick-container__title">
              <h3>Vehicle Models</h3>
              <h2>Our rental fleet</h2>
              <p>
                Choose from a variety of our amazing vehicles to rent for your
                next adventure or business trip
              </p>
            </div>
            <div className="pick-container__car-content">
              {/* pick car */}
              <div className="pick-box">
                {carButtons.map((btn) => (
                  <button
                    key={btn.id}
                    className={`${coloringButton(btn.id)}`}
                    onClick={() => {
                      setActive(btn.id);
                      btnID(btn.id);
                    }}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {carButtons.map(
                (btn) =>
                  active === btn.id && (
                    <CarBox data={CAR_DATA} carID={btn.carID} key={btn.id} />
                  )
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PickCar;
