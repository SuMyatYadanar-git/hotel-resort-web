import React from "react";
import { withRouter } from "react-router-dom";
import Header from "../../app/Header";
import Img from "../../../assets/image/headers/contact/1.jpg";

const ContactHeader = props => {
  return <Header bgimg={Img} />;
};
export default withRouter(ContactHeader);
