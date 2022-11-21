import React from "react";
import "./Main.css";
import caed_logo from "../../images/card-logo.svg";
import { useState } from "react";
import Success from "../Success/Success";
const Main = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState(null);
  const [month, setmonth] = useState(null);
  const [cvv, setcvv] = useState(null);
  const [year, setyear] = useState(null);
  const [error, seterror] = useState("");
  const [hide, sethide] = useState("inputs");
  const [show, setshow] = useState("main_sucess_container");
  const Save = () => {
    if (!name) {
      const name = document.getElementById("name");
      seterror("Can't be blank");
      name.nextElementSibling.classList = "error";
    } else {
      seterror("");
      const name = document.getElementById("name");
      name.nextElementSibling.classList = "error_hide";
    }
    if (!number) {
      const number = document.getElementById("number");
      seterror("Can't be blank");
      number.nextElementSibling.classList = "error";
    } else {
      const number = document.getElementById("number");
      seterror("");
      number.nextElementSibling.classList = "error_hide";
    }
    if (!month || !year) {
      const month = document.getElementById("month");
      seterror("Can't be blank");
      month.nextElementSibling.nextElementSibling.classList = "error";
    } else {
      const month = document.getElementById("month");
      seterror("");
      month.nextElementSibling.nextElementSibling.classList = "error_hide";
    }
    if (!cvv) {
      const cvv = document.getElementById("cvv");
      seterror("Can't be blank");
      cvv.nextElementSibling.classList = "error";
    } else {
      const cvv = document.getElementById("cvv");
      seterror("");
      cvv.nextElementSibling.classList = "error_hide";
    }
    if (name && number && month && year && cvv && number.length === 16) {
      sethide("inputs_hide");
      setshow("main_sucess_container_show");
    }
  };
  const Click = () => {
    sethide("inputs");
    setshow("main_sucess_container");
  };
  return (
    <div className="main_card_container">
      <div className="upper_container">
        <div className="front_card">
          <div className="card_details">
            <div className="card_logo">
              <img src={caed_logo} alt="" />
            </div>
            <div className="card_number">
              <h3>0000 0000 0000 0000</h3>
            </div>
            <div className="card_holder">
              <p>Jane Appleseed</p>
              <p>00/00</p>
            </div>
          </div>
        </div>
        <div className="back_card">
          <div className="card_details">
            <div className="cvv">
              <p>000</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_container">
        <Success class={show} handle_click={Click} />
        <div className={hide}>
          <label htmlFor="Name">
            <p>Cardholder Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              placeholder="e.g. Jane Appleseed"
              id="name"
            />
            <span className="error_hide">{error}</span>
          </label>
          <label htmlFor="">
            <p>Card Number</p>
            <input
              type="number"
              placeholder="e.g. 1234 5678 9123 0000"
              value={number}
              onChange={(e) => {
                setnumber(e.target.value);
              }}
              id="number"
            />
            <span className="error_hide">{error}</span>
          </label>
          <div className="dates_cvv">
            <div className="date">
              <label htmlFor="">
                <p>Exp. Date (MM/YY)</p>
                <input
                  type="number"
                  id="month"
                  value={month}
                  onChange={(e) => {
                    setmonth(e.target.value);
                  }}
                  placeholder="MM"
                />
                <input
                  type="number"
                  placeholder="YY"
                  id="year"
                  value={year}
                  onChange={(e) => {
                    setyear(e.target.value);
                  }}
                />
                <span className="error_hide">{error}</span>
              </label>
            </div>
            <div>
              <label htmlFor="">
                <p>CVV</p>
                <input
                  type="number"
                  placeholder="123"
                  value={cvv}
                  id="cvv"
                  onChange={(e) => {
                    setcvv(e.target.value);
                  }}
                />
                <span className="error_hide">{error}</span>
              </label>
            </div>
          </div>
          <div className="btn">
            <button onClick={Save}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
