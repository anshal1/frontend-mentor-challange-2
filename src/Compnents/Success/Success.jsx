import React from "react";
import "./Success.css";
import success from "../../images/icon-complete.svg";
const Success = (props) => {
  return (
    <>
      <div className={props.class}>
        <div className="success_img">
          <img src={success} alt="" />
        </div>
        <div className="sucess_txt">
          <h1>Thank You</h1>
          <p>We've added your card details</p>
        </div>
        <div className="continue_btn">
            <button onClick={props.handle_click}>Continue</button>
        </div>
      </div>
    </>
  );
};

export default Success;
