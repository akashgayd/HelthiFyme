import React from "react";
import "./third.css";
import Coach from "../../../assets/Coach-Guidance.avif";
import Ria from "../../../assets/Ria-AI-Nutritionist.avif";
import Best from '../../../assets/Best-Class-Coaching.avif'

const GetappThird = () => {
  return (
    <div className="third-comp-cont">
      <div className="third-comp-left-part">
        <div className="third-comp-heading">
          Guidance from India’s #1 Coaches
        </div>
        <div className="guide-part">
          <div className="icon-text-part">
            <img src={Coach} alt="" className="tracker-img" />
            <span className="tracker-text">Coach Guidance</span>
          </div>
          <div className="icon-text-part">
            <img src={Ria} alt="" className="tracker-img" />
            <span className="tracker-text">Ria - AI Nutritionist</span>
          </div>
        </div>
        <p className="second-comp-para">
          Get one-on-one coaching and diet plans designed by certified
          nutritionists, workout coaches & yoga instructors. Also receive
          instant and personalized tips round-the-clock from Smart Coach Ria.
          Ria is the world’s first AI-powered coach, driven by over 200 million
          food and workout logs.
        </p>
      </div>
      <div className="third-comp-right-part">
        <img src={Best} alt="" className="right-part-img"/>
      </div>
    </div>
  );
};

export default GetappThird;
