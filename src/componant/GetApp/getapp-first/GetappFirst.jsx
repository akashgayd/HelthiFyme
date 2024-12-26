import React from "react";
import "./first.css";
import Apple from "../../../assets/appstore_ic.svg";
import Playstore from "../../../assets/playstore_ic.svg";
import AppHero from '../../../assets/Our-App-Hero.avif'

const GetappFirst = () => {
  return (
    <div className="First-comp-cont">
      <div className="First-comp-cont-1">
        <div className="first-comp-left">
          <div className="comp-left-heading">Meet the All-New HealthifyMe</div>
          <div className="comp-left-para">
            Kickstart your journey towards an all-new you. Get a FREE coach
            consultation call today.
          </div>
          <div className="comp-left-btn-grp">   
            <button className="store s1">
              <img src={Apple} alt="" className="store-icon" />
              <span className="store-name">App Store</span>
            </button>
            <button className="store s1">
              <img src={Playstore} alt="" className="store-icon" />
              <span className="store-name">Google Play</span>
            </button>
          </div>
        </div>
        <div className="first-comp-right">
            <img src={AppHero} alt="" className="hero" />
        </div>
      </div>
    </div>
  );
};

export default GetappFirst;
