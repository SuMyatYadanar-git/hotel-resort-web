import React from "react";

import Roomcard from "../components/roomCards";
import RoomHeader from "../components/roomHeader";

const Room = () => {
  return (
    <div className="container-fluid p-0">
      <RoomHeader />
      <Roomcard />
    </div>
  );
};

export default Room;
