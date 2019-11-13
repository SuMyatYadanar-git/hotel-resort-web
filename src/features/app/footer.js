import React from "react";

import MyLink from "../../tools/myLink";
import Logo from "../../assets/icons/logo.png";
import MyInput from "../../tools/myInput";
import * as Colors from "../../config/color.config";
import { withMedia } from "react-media-query-hoc";

const Footer = props => {
  const { media } = props;
  return (
    <div>
      <div className="container-fluid bg-dark py-3">
        <div className="d-flex flex-row flex-wrap justify-content-between text-light">
          <div className="d-flex flex-row flex-fill align-items-center">
            <i className="fa fa-envelope fa-2x px-4" />
            <div className="col-lg-5">
              <MyInput
                id={"eMail"}
                placeHolder={"Enter your email"}
                style={{ background: Colors.Footerbg, color: Colors.textwhite }}
                height={"50px"}
              />
              <i
                className="fa fa-send border-left pl-4"
                style={{
                  marginTop: -38,
                  marginRight: 25,
                  float: "right",
                  color: Colors.textwhite,
                  opacity: 0.8,
                  fontSize: 23
                }}
              ></i>
            </div>
          </div>
          {media.mobile || (
            <div className="align-self-center">
              <a href="www.facebook.com">
                <i className="fa fa-facebook pr-3" />
              </a>
              <a href="#">
                <i className="fa fa-twitter pr-3" />
              </a>
              <a href="#">
                <i className="fa fa-instagram pr-3" />
              </a>
              <a href="#">
                <i className="fa fa-youtube pr-3" />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="text-light py-4" style={{ background: Colors.Footerbg }}>
        <div className="container py-4">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <img src={Logo} className="w-100" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 px-2">
              <ul style={{ listStyle: "none", lineHeight: 2 }}>
                <li>
                  <MyLink to={'#'} text={"FAQS"} />
                </li>
                <li>
                  <MyLink to={'#'} text={"News"} />
                </li>
                <li>
                  <MyLink to={'#'} text={"Photo and Video"} />
                </li>
                <li>
                  <MyLink to={'#'} text={"Restaurant"} />
                </li>
                <li>
                  <MyLink to={'#'} text={"Gift Card"} />
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 px-2">
              <ul style={{ listStyle: "none", lineHeight: 2 }}>
                <li>
                  <MyLink text={"Our Location"} />
                </li>
                <li>
                  <MyLink text={"Carrier"} />
                </li>
                <li>
                  <MyLink text={"About Us"} />
                </li>
                <li>
                  <MyLink text={"Contact Us"} />
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-4 px-2">
              <ul style={{ listStyle: "none", lineHeight: 2 }}>
                <li>
                  <MyLink text={"About"} />
                </li>
                <li>
                  <MyLink text={"Event"} />
                </li>
                <li>
                  <MyLink text={"Contact"} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="container border-top pt-3"
          style={{ color: Colors.textwhite, opacity: 0.5 }}
        >
          <div className="d-flex flex-row flex-nowrap justify-content-between">
            <span>Copyright Ⓒ by KUMO Solutions</span>
            <span>
              <i className="fa fa-cc-paypal fa-2x px-1"></i>
              <i className="fa fa-cc-mastercard fa-2x px-1"></i>
              <i className="fa fa-cc-visa fa-2x px-1"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withMedia(Footer);
