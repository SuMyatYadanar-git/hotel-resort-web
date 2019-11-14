import React from "react";
import { withRouter } from "react-router-dom";

import Header from "../../app/Header";
import Img from "../../../assets/image/headers/restaurant/1.jpg";

const RestaurantHeader = props => {
  // title={location.pathname.slice(1)}
  const { location } = props;
  return <Header bgimg={Img}  />;
};
export default withRouter(RestaurantHeader);
