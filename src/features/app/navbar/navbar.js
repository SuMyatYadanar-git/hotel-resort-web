import React, { useEffect, useState } from "react";
import { withMedia } from "react-media-query-hoc";

import Logo from "../../../assets/icons/logo.png";
import * as RoutePath from "../../../config/route.config";
import { fsc } from "../../../helper/fontControlHelper";
import MyLink from "../../../tools/myLink";
import * as Colors from "../../../config/color.config";

const Navbar = props => {
  const { media } = props;

  const [MenuClick, setMenuClick] = useState(false);
  const handleMenuClick = () => {    
    setMenuClick(!MenuClick);
  };
  useEffect(() => {
    if(media.desktop||media.tablet)
    {setMenuClick(false)}
    window.onscroll = () => {
      const MyNav = document.getElementById("NavbarContainer");

      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        MyNav.style.background = "black";
        MyNav.style.position = "fixed";
        MyNav.style.top = 0;
      } else {
        MyNav.style.background = "none";
        MyNav.style.position = "relative";
      }
    };
  });

  return (
    <div className="sticky-top position-fixed w-100">
      {document.body.scrollTop === 0 ? (
        <div
          className="d-flex flex-row flex-wrap justify-content-between px-4 border-bottom py-2  text-light"
          style={{ fontSize: fsc(media, 13) ,borderBottom:'1px solid light'}}
          id="NavTitle"
        >
          <span className="flex-column">
            <i className="fa fa-map-marker pr-2" />
            <span className="border-right pr-2">
              225 Beach Street, Australian
            </span>

            <i className="fa fa-phone px-2" />
            <span>225 Beach Street</span>
          </span>

          {media.mobile || (
            <span>
              <a href="http://www.facebook.com" className="text-light">
                <i className="fa fa-facebook pr-3" />
              </a>
              <a href="http://www.twitter.com" className="text-light">
                <i className="fa fa-twitter pr-3" />
              </a>
              <a href="http://www.youtube.com" className="text-light">
                <i className="fa fa-instagram pr-3" />
              </a>
              <a href="http://www.youtube.com" className="text-light">
                <i className="fa fa-youtube pr-3" />
              </a>
            </span>
          )}
        </div>
      ) : null}
      <div
        id="NavbarContainer"
        className="d-flex flex-row w-100 justify-content-between py-2 px-4 "
        style={{
          background: "none",
          zIndex: 2,
          opacity: MenuClick?1: 0.9,
          transition: ".4s"
        }}
      >
        <div style={{ width: 80 }}>
          <img src={Logo} alt="Logo" className="w-100" />
        </div>
        {media.mobile && MenuClick === false ? (
          <span
            style={{ fontSize: 25, color: Colors.textwhite }}
            onClick={handleMenuClick}
          >
            <i className="fa fa-list pt-3" />
          </span>
        ) : media.mobile && MenuClick === true ? null : (
          <div className="nav nav-link" style={{ fontSize: fsc(media, 20) }}>
            <MyLink
              className="text-decoration-none pr-4"
              id={"MenuLink"}
              to={`/${RoutePath.Home}`}
              text={"HOME"}
            />
            <MyLink
              className="text-decoration-none pr-4"
              id={"MenuLink1"}
              to={`/${RoutePath.Room}`}
              text={"ROOM"}
            />
            <MyLink
              className="text-decoration-none pr-4"
              id={"MenuLink2"}
              to={`/${RoutePath.Restaurant}`}
              text={"RESTAURANT"}
            />
            <MyLink
              className="text-decoration-none pr-4"
              id={"MenuLink3"}
              to={`/${RoutePath.Contact}`}
              text={"CONTACT"}
            />
          </div>
        )}
        {MenuClick && (
          <div className="container-fluid bg-dark text-light w-75" style={{borderRadius:5}}>
            <ul style={{ listStyle: "none" }} className="pl-2 text-left">
              <div className="w-100 text-right">
                <i
                  className="fa fa-times px-2 pt-3"
                  onClick={handleMenuClick}
                />
              </div>
              <li className="py-2 border-bottom">
                <MyLink text={"HOME"} to={`/${RoutePath.Home}`} />
              </li>
              <li className="py-2 border-bottom">
                <MyLink text={"ROOM"} to={`/${RoutePath.Room}`} />
              </li>
              <li className="py-2 border-bottom">
                <MyLink text={"RESTAURANT"} to={`/${RoutePath.Restaurant}`} />
              </li>
              <li className="pt-2">
                <MyLink text={"CONTACT"} to={`/${RoutePath.Contact}`} />
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default withMedia(Navbar);
