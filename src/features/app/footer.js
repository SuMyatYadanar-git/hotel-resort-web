import React from "react";

import MyLink from "../../tools/myLink";
import Logo from "../../assets/icons/Goldlogo.png";
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
                <i className="fab fa-facebook pr-3" />
              </a>
              <a href="#">
                <i className="fab fa-twitter pr-3" />
              </a>
              <a href="#">
                <i className="fab fa-instagram pr-3" />
              </a>
              <a href="#">
                <i className="fab fa-youtube pr-3" />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="text-light py-4" style={{ background: Colors.Footerbg }}>
        <div className="container py-4">
          <div className="row text-center">
            <div className="col-lg-3 col-md-3 col-12 pb-4">
              <img src={Logo} className="w-75" />
            </div>
            <div className="col-lg-3 col-md-3 col-4 px-2 text-left">
              <ul style={{ listStyle: "none", lineHeight: 2 }}>
                <li>
                  <MyLink to={"#"} text={"FAQS"} />
                </li>
                <li>
                  <MyLink to={"#"} text={"News"} />
                </li>
                <li>
                  <MyLink to={"#"} text={"Photo and Video"} />
                </li>
                <li>
                  <MyLink to={"#"} text={"Restaurant"} />
                </li>
                <li>
                  <MyLink to={"#"} text={"Gift Card"} />
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-3 col-4 px-2 text-left">
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
            <div className="col-lg-3 col-md-3 col-4 px-2 text-left">
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
            <span>Copyright Ⓒ by Co.Ltd </span>
            <span>
              <i className="fab fa-cc-paypal fa-2x px-1"></i>
              <i className="fab fa-cc-mastercard fa-2x px-1"></i>
              <i className="fab fa-cc-visa fa-2x px-1"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withMedia(Footer);
