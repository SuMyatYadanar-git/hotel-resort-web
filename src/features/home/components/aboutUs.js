import React from "react";

import GL from "../../../assets/image/aboutUs/index.png";
import AboutUsImg from "../../../assets/image/aboutUs/abb.png";

const AboutUs = () => {
  return (
    <div className="container py-5">
     
      <div className="row">
        <div className="col-lg-6 text-center">
        <div style={{ fontSize: 35 }}> About Us</div>
      <div>
        {" "}
        <img src={GL} alt="goldUnderline" />
      </div>
          <div className="p-4 text-justify">
            <p>
              Contrary to popular belief, Lorem isn’t simply random text. It has
              roots in a of classical Latin literature from 45 BC, making it
              over 2000 years old. Avalon’s leading hotels with gracious island
              hospitality, thoughtful amenities and distinctive . Richard
              McClintock, a Latin professor at Hampden-Sydney College in
              Virginia, looked up one of the more obscure Latin words,
              consectetur, from a Lorem Ipsum passage …
            </p>
          </div>
        </div>
        <div className="col-lg-6 px-4">
          <img src={AboutUsImg} alt="abb" className="d-block w-100 h-100" />
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
