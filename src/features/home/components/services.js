import React from "react";

import Wifi from "../../../assets/icons/wifi.png";
import Buffet from "../../../assets/icons/buffet.png";
import Car from "../../../assets/icons/car.png";
import Clean from "../../../assets/icons/clean.png";
import Spa from "../../../assets/icons/spa.png";
import Awe from "../../../assets/icons/awe-package.png";
import Seaview from "../../../assets/icons/awe-package.png";
import BedRoom from "../../../assets/icons/master-bedroom.png";

const Services = props => {
  return (
    <div className="px-3">
      <div className="d-flex justify-content-center flex-wrap">
        <div className="flex-fill px-2 py-1">
          <ServiceItem img={Wifi} text={"WIFI COVERAGE"} />
        </div>
        <div className="flex-fill px-2 py-1">
          <ServiceItem img={Buffet} text={"BUFFET BREAKFAST"} />
        </div>
        <div className="flex-fill px-2 py-1">
          <ServiceItem img={Car} text={"AIRPORT TAXI"} />
        </div>
        <div className="flex-fill px-2 py-1">
          <ServiceItem img={Clean} text={"CLEANING EVERYDAY"} />
        </div>
      </div>
      <div className="d-flex justify-content-center flex-wrap pt-2">
        <div className="flex-fill px-2 py-1">
          <ServiceItem img={Spa} text={"POOL & SPA"} />
        </div>
        <div className="flex-fill px-2 py-1">
          <ServiceItem img={Awe} text={"AWSOME PACKAGES"} />
        </div>
        <div className="flex-fill px-2 py-1">
          <ServiceItem img={Seaview} text={"SEA VIEW BALCONY"} />
        </div>
        <div className="flex-fill px-2 py-1">
          <ServiceItem img={BedRoom} text={"MASTER BEDROOMS"} />
        </div>
      </div>
    </div>
  );
};
export default Services;

const ServiceItem = ({ img, text }) => {
  return (
    <div
      className=" py-3 border  rounded text-center d-block "
      style={{ height: 120, minWidth: 150,lineHeight:3}}
    >
      <img src={img} alt="wifi" />
      <p>{text}</p>
    </div>
  );
};
