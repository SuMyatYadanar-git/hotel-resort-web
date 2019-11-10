import React from "react";
import {Link} from 'react-router-dom'

import * as Colors from "../config/color.config";


const MyLink = props => {
  const { text,style } = props;
  const defaultStyle = { textDecoration: "none", color: Colors.textwhite };
  const userStyle = style === undefined ? {} : style;
  return (
    <Link
      style={{ ...defaultStyle, ...userStyle }}
    >{text}</Link>
  );
};

export default MyLink;
