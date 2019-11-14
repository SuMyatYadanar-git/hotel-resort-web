import React from "react";

import Roomcard from "../components/roomCards";
import RoomHeader from "../components/roomHeader";

const Room = () => {
  return (
    <div className="container-fluid p-0">
      <RoomHeader />
      <div className="pt-3"> <Roomcard /></div>
      
    </div>
  );
};

export default Room;
