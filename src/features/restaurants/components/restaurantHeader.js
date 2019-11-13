import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../../app/Header";
import Img from "../../../assets/image/headers/restaurant/1.jpg";

const RestaurantHeader = props => {
  const { location } = props;
  return <Header bgimg={Img} title={location.pathname.slice(1)} />;
};
export default withRouter(RestaurantHeader);
