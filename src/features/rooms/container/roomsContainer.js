import React from "react";

import Roomcard from "../components/roomCards";
import RoomHeader from "../components/roomHeader";
import Footer from '../../app/footer'


const Room = () => {
  return (
    <div className="container-fluid p-0">
      <RoomHeader />
      <div className="pt-3"> <Roomcard /></div>
      <Footer/>
    </div>
  );
};

export default Room;
