import React from "react";
import "./fourth.css";
import Plans from "../../../assets/Lifestyle-Plans.avif";
import Diet from "../../../assets/Diet-Plan.avif";
import WorkoutPlan from "../../../assets/Workout-Plan.avif";

const GetappFourth = () => {
  return (
    <div className="fourth-comp-cont">
      <div className="fourth-comp-left-part">
        <img src={Plans} alt="" className="plans" />
      </div>
      <div className="fourth-comp-right-part">
        <div className="fourth-part-heading">
          Personalized Diet and Workout Plans
        </div>
        <div className="plan-part">
          <div className="icon-text-part">
            <img src={Diet} alt="" className="tracker-img" />
            <span className="tracker-text">Coach Guidance</span>
          </div>
          <div className="icon-text-part">
            <img src={WorkoutPlan} alt="" className="tracker-img" />
            <span className="tracker-text">Ria - AI Nutritionist</span>
          </div>
        </div>
        <p className="second-comp-para">
          Lose weight with a diet and workout plan customized as per your
          lifestyle and preferences. HealthifyMe Coaches will use your body
          metrics and health data to build a customized plan to achieve your
          fitness goals and top immunity.
        </p>
      </div>
    </div>
  );
};

export default GetappFourth;
