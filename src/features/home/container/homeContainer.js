import React from "react";
import { withMedia } from 'react-media-query-hoc'

import AboutUs from "../components/aboutUs";
import Carousel from "../components/carousel";
import CheckAvability from "../components/checkAvailability";
import Event from "../components/event";
import OurRooms from "../components/roomsGallery";
import Services from "../components/services";
import StaffInfo from "../components/staffInfo";
import HomeCarousel from "../components/carousel";
import Navbar from "../../app/navbar/navbar";

const Home = props => {
  const { media } = props
  return (
    <div className="container-fluid p-0">
      <div >
        <HomeCarousel media={media} />
        <Navbar />
      </div>
      <div className=" container pt-3">
        <CheckAvability />
        <OurRooms />
        <AboutUs />
        <Event />
        <Services />
      </div>

      {/* <Carousel /> */}
      <StaffInfo />
    </div>
  );
};

export default withMedia(Home);
