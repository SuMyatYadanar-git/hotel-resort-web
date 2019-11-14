import React from "react";
import { withMedia } from "react-media-query-hoc";

import Navbar from "./navbar/navbar";

const Header = props => {
  const { bgimg, title, media, text } = props;

  const bgStyle = {
    paddingTop: media.mobile ? '8rem' : media.tablet ? '8rem' : '10rem',
    paddingBottom: media.mobile ? "5rem" : media.tablet ? "8rem" : "8rem",
    backgroundImage: `url(${bgimg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    textShadow: "1px 1px grey",
    // backgroundColor: 'rgba(72, 72, 72, 0.5)',
    boxSizing: "border-box",
    textAlign: "center"
  };

  return (
    <div
      style={bgStyle}
      className="text-center text-light w-auto"
    >
      <Navbar {...props} />
      <div className="text-uppercase text-center"> {title}</div>
      <p className="py-3 ">{text}</p>
    </div>
  );
};

export default withMedia(Header);
