import React from "react";
import Slider from "react-slick";

import bg1 from "../../../assets/image/headers/rooms/1.jpg";
import bg2 from "../../../assets/image/headers/restaurant/1.jpg";
import bg3 from "../../../assets/image/headers/contact/1.jpg";
import "./carousel.css";
import {withMedia} from "react-media-query-hoc";

const Carousel = props => {
  const { media } = props;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: media.mobile ? false : true
  };
  return (
    <Slider {...settings}>
      <div>
        {" "}
        <SliderContent img={bg1} media={media} />
      </div>
      <div>
        {" "}
        <SliderContent img={bg2} media={media} />
      </div>
      <div>
        {" "}
        <SliderContent img={bg3} media={media} />
      </div>
    </Slider>
  );
};
export default withMedia(Carousel);

const SliderContent = ({ img, media }) => {
  return (
    <div style={{ height: media.desktop ? 600 : media.tablet ? 500 : "100%" }}>
      <img src={img} alt="slider_pics" className="img-fluid w-100" />
    </div>
  );
};
