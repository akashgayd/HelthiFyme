import React from "react";
import "./fifth.css";
import Smart from "../../../assets/Smart-Scale.avif";
import CGM from "../../../assets/CGM.avif";
import Connectivity from "../../../assets/Connectiviity-Smart-Fitness-Devices.avif";

const GetappFifth = () => {
  return (
    <div className="fifth-comp-cont">
      <div className="fifth-comp-left-part">
        <div className="fifth-comp-heading">
          Guidance from India’s #1 Coaches
        </div>
        <div className="scale-part">
          <div className="icon-text-part">
            <img src={Smart} alt="" className="tracker-img" />
            <span className="tracker-text">Smart Scale</span>
          </div>
          <div className="icon-text-part">
            <img src={CGM} alt="" className="tracker-img" />
            <span className="tracker-text">CGM</span>
          </div>
        </div>
        <p className="second-comp-para">
          Get fit faster, more consistently and holistically. Advanced
          health-tech such as Smart Scale give you 12+ body metrics like body
          fat% and muscle mass. CGM gives you real-time insights into your blood
          glucose levels, which are used by coaches to create your customized
          diet and workout plan.
        </p>
      </div>
      <div className="fifth-comp-right-part">
        <img src={Connectivity} alt="" className="connectivity-img" />
      </div>
    </div>
  );
};

export default GetappFifth;
