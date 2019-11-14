import React from "react";
import {withRouter} from 'react-router-dom'
import Header from "../../app/Header";
import Img from "../../../assets/image/headers/contact/1.jpg";

const ContactHeader = props => {
  const {location} = props

  return <Header bgimg={Img} title={location.pathname.slice(1)}/>;
};
export default withRouter(ContactHeader);