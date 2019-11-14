import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bg1 from "../../assets/image/headers/contact/1.jpg";
import Header from "../app/Header";
import VD from "../../assets/image/view/vp.jpg";
import Vd1 from "../../assets/image/view/vp2.jpg";
import Vd2 from "../../assets/image/view/vp1.jpg";
import Vd3 from "../../assets/image/view/vp3.jpg";
import Vd4 from "../../assets/image/view/vp4.jpg";
import Vd5 from "../../assets/image/view/vp2.jpg";

const ViewDetailRoomPage = () => {
  return (
    <div>
      <Header bgimg={bg1} />

      <div className="col-lg-6">
        <Carousel
          showIndicators={false}
          dynamicHeight={true}
          showStatus={false}
          showArrows={false}
        >
          <div>
            <img src={VD} alt="vvp" />
            <p
              className="legend"
              style={{
                backgroundColor: "black",
                opacity: 0.4,
                position: "absolute",
                fontWeight: "bold",
                fontSize: "15px"
              }}
            >
              Family Room
            </p>
          </div>
          <div>
            <img src={Vd1} alt="vvp1" />
            <p
              className="legend"
              style={{
                backgroundColor: "black",
                opacity: 0.5,
                position: "absolute",
                fontWeight: "bold",
                fontSize: "15px"
              }}
            >
              Family Room
            </p>
          </div>
          <div>
            <img src={Vd2} alt="vvp3" />
            <p
              className="legend"
              style={{
                backgroundColor: "black",
                opacity: 0.5,
                position: "absolute",
                fontWeight: "bold",
                fontSize: "15px"
              }}
            >
              Family Room
            </p>
          </div>
          <div>
            <img src={Vd3} alt="vvp5" />
            <p
              className="legend"
              style={{
                backgroundColor: "black",
                opacity: 0.5,
                position: "absolute",
                fontWeight: "bold",
                fontSize: "15px"
              }}
            >
              Family Room
            </p>
          </div>
          <div>
            <img src={Vd4} alt="vvp6" />
            <p
              className="legend"
              style={{
                backgroundColor: "black",
                opacity: 0.5,
                position: "absolute",
                fontWeight: "bold",
                fontSize: "15px"
              }}
            >
              Family Room
            </p>
          </div>
          <div>
            <img src={Vd5} alt="vvp7" />
            <p
              className="legend"
              style={{
                backgroundColor: "black",
                opacity: 0.5,
                position: "absolute",
                fontWeight: "bold",
                fontSize: "15px"
              }}
            >
              Family Room
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};
export default ViewDetailRoomPage;
