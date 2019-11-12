import React, { useState } from "react";
import { withMedia } from "react-media-query-hoc";

import * as Colors from "../../../config/color.config";
import Line from "../../../assets/image/line.png";
import * as Font from "../../../config/font.config";
import { fsc } from "../../../helper/fontControlHelper";

const Dinner = props => {
  const { media } = props;
  const [hover, setHover] = useState(false);
  const _handleHover = e => {
    setHover(!hover);
    if (hover === true) {
      document.getElementById(e.target.id).style.transform = "scale(1)";
    } else {
      document.getElementById(e.target.id).style.transform = "scale(1.2)";
    }
  };
  return (
    <div className="container text-left py-4">
      <div className="d-flex flex-column align-items-center">
      <span
          style={{
            fontSize: fsc(media, 35),
            fontFamily: Font.bodyTitle,
            fontWeight: "bold"
          }}
        >
          DRINKS
        </span>
        {/* file seprate */}
        <p style={{ color: Colors.bodyText, fontWeight: "bold" }}>
          11:00 Am - 2:00 Pm
        </p>
      </div>

      <div className="d-flex flex-row flex-wrap">
        {DinnerData.map((v, k) => (
          <div className="col-lg-6 p-3" key={k}>
            <div
              className="d-flex flex-row bg-light"
              style={{ transition: "1s" }}
            >
              <div className="w-100" style={{ overflow: "hidden" }}>
                <img
                  src={process.env.PUBLIC_URL + `${v.ImgUrl}`}
                  id={v.id}
                  onMouseLeave={id => _handleHover(id)}
                  onMouseOver={id => _handleHover(id)}
                  className="img-fluid d-block"
                  style={{ margin: "0 auto", transition: "1s" }}
                  alt="rooms"
                />
              </div>
              <div className="d-flex flex-column px-3">
                <span
                  style={{
                    color: Colors.navbg,
                    fontSize: fsc(media, 20),
                    fontWeight: "bold"
                  }}
                >
                  {v.Name}
                </span>
                <span
                  style={{
                    color: Colors.navbg,fontSize: fsc(media, 14)
                  }}
                >
                  {v.desc}
                </span>
                <span
                  style={{ color: Colors.textGold, fontSize: fsc(media, 30),fontWeight:'bold' }}
                >
                  $ {v.Price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withMedia(Dinner);

const DinnerData = [
  {
    id: 1,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/breakfast/restaurant-01.jpg"
  },
  {
    id: 2,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/breakfast/restaurant-03.jpg"
  },
  {
    id: 3,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/breakfast/restaurant-07.jpg"
  },
  {
    id: 4,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/breakfast/restaurant-08.jpg"
  },
  {
    id: 5,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/breakfast/restaurant-11.jpg"
  },
  {
    id: 6,
    Name: "ROAST & VEGETABLES",
    Price: 300,
    desc:
      "Egg Beaters scrambled with slow-roasted tomatoes, onion, fresh spinach and mushrooms.",
    ImgUrl: "/images/restaurant/breakfast/restaurant-18.jpg"
  }
];
