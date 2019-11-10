import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { withMedia } from "react-media-query-hoc";

import Logo from "../../../assets/icons/logo.png";
import * as RoutePath from "../../../config/route.config";
import { fsc } from "../../../helper/fontControlHelper";

const Navbar = props => {
  const { media } = props;

  useEffect(() => {
    window.onscroll = () => {
      const MyNav = document.getElementById("NavbarContainer");
      const NavTitle = document.getElementById("NavTitle");
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
      console.log();
    };
  });

  return (
    <div className="container-0">
      {document.body.scrollTop === 0 ? (
        <div
          className="d-flex flex-row flex-wrap justify-content-between px-4 border-bottom py-2"
          style={{ fontSize: fsc(media, 13) }}
          id="NavTitle"
        >
          <span className="flex-column">
            <i className="fa fa-map-marker pr-2" />
            <span className="border-right pr-2">
              225 Beach Street, Australian
            </span>

            <i className="fa fa-phone px-2" />
            <span>225 Beach Street, Australian</span>
          </span>

          {media.mobile||
            <span>
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
            </span>
          }
        </div>
      ) : null}
      <div
        id="NavbarContainer"
        className="d-flex flex-row w-100 justify-content-between text-dark py-2 px-4"
        style={{ background: "none", zIndex: 2, opacity: 0.9,transition:'.4s' }}
      >
        <div style={{ width: 80, height: 60 }}>
          <img src={Logo} alt="Logo" className="w-100 h-100" />
        </div>
        {media.mobile ? (
          <span style={{ fontSize: 25 }}>
            <i className="fa fa-list" />
          </span>
        ) : (
          <div className="nav nav-link" style={{ fontSize: fsc(media, 20) }}>
            <Link
              className="text-decoration-none text-dark pr-4"
              to={`/${RoutePath.Home}`}
            >
              HOME
            </Link>
            <Link
              className="text-decoration-none text-dark pr-4"
              to={`/${RoutePath.Room}`}
            >
              ROOM
            </Link>
            <Link
              className="text-decoration-none text-dark pr-4"
              to={`/${RoutePath.Restaurant}`}
            >
              RESTAURANT
            </Link>
            <Link
              className="text-decoration-none text-dark pr-4"
              to={`/${RoutePath.Contact}`}
            >
              CONTACT
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default withMedia(Navbar);
