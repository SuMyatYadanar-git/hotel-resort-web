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
    <div className="py-2">
      <div className="d-flex flex-row flex-wrap align-items-center  px-3">
        <div className="col-lg-3 col-sm-6 p-0 px-2 py-1">
          <ServiceItem img={Wifi} text={"WIFI COVERAGE"} />
        </div>
        <div className="col-lg-3 col-sm-6 p-0 px-2 py-1">
          <ServiceItem img={Buffet} text={"BUFFET BREAKFAST"} />
        </div>
        <div className="col-lg-3 col-sm-6 p-0 px-2 py-1">
          <ServiceItem img={Car} text={"AIRPORT TAXI"} />
        </div>
        <div className="col-lg-3 col-sm-6 p-0 px-2 py-1">
          <ServiceItem img={Clean} text={"CLEANING EVERYDAY"} />
        </div>
        <div className="col-lg-3 col-sm-6 p-0 px-2 py-1">
          <ServiceItem img={BedRoom} text={"MASTER BEDROOMS"} />
        </div>
        <div className="col-lg-3 col-sm-6 p-0 px-2 py-1">
          <ServiceItem img={Spa} text={"POOL & SPA"} />
        </div>
        <div className="col-lg-3 col-sm-6 p-0 px-2 py-1">
          <ServiceItem img={Awe} text={"AWSOME PACKAGES"} />
        </div>
        <div className="col-lg-3 col-sm-6 p-0 px-2 py-1">
          <ServiceItem img={Seaview} text={"SEA VIEW BALCONY"} />
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
      style={{ height: 120, minWidth: 150, lineHeight: 3 }}
    >
      <img src={img} alt="service-items" className="img-fluid" />
      <p>{text}</p>
    </div>
  );
};
