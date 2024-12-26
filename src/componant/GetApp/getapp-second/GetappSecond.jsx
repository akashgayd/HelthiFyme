import React from "react";
import "./getappsecond.css";
import Lifestyle from "../../../assets/LifestyleTracking.avif";
import Nutrition from "../../../assets/Nutrition-Tracker.avif";
import Water from "../../../assets/Water-Tracker.avif";
import Workout from "../../../assets/Workout-Tracker.avif";
import Weight from "../../../assets/Weight-Tracker.avif";

const GetappSecond = () => {
  return (
    <div className="second-comp-cont">
      <div className="second-comp-left-part">
        <img src={Lifestyle} alt="" className="lifestyle" />
      </div>
      <div className="second-comp-right-part">
        <div className="second-right-heading">
          Habit Building with Lifestyle Trackers
        </div>
        <div className="second-right-feature-part">
          <div className="feature-left-part">
            <div className="icon-text-part">
              <img src={Nutrition} alt="" className="tracker-img" />
              <span className="tracker-text">Nutrition Tracker</span>
            </div>
            <div className="icon-text-part">
              <img src={Workout} alt="" className="tracker-img" />
              <span className="tracker-text">Workout Tracker</span>
            </div>
          </div>
          <div className="feature-right-part">
            <div className="icon-text-part">
              <img src={Water} alt="" className="tracker-img" />
              <span className="tracker-text">Water Tracker</span>
            </div>
            <div className="icon-text-part">
              <img src={Weight} alt="" className="tracker-img" />
              <span className="tracker-text">Weight Tracker</span>
            </div>
          </div>
        </div>
        <p className="second-comp-para">
          Track your health data with 8 lifestyle trackers. Log meals on the
          most trusted nutrition tracker and get a breakdown of protein,
          carbohydrate, fats & fibre intake. Map your accurate macronutrient
          intake and access the largest database of 10,000+ Indian foods.
        </p>
      </div>
    </div>
  );
};

export default GetappSecond;
