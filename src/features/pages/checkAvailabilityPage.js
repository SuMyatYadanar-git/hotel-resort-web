import React, { useState, useEffect } from "react";

import bg1 from "../../assets/image/headers/contact/1.jpg";
import Header from "../app/Header";

import AvailabilityCheck from "../home/components/checkAvailability";

const CheckAvailabilityPage = props => {
  const RoomData = JSON.parse(localStorage.getItem("RoomData"));
  const [availableRoom, setAvailableRoom] = useState(RoomData);

  
  console.log(availableRoom);

  return (
    <div>
      <Header bgimg={bg1} />
      <div className="container py-4">
        <AvailabilityCheck />
        {availableRoom.map((v, k) => (
          <div key={k}>{v.isAvailable&&v.id}</div>
        ))}
      </div>
    </div>
  );
};
export default CheckAvailabilityPage;
