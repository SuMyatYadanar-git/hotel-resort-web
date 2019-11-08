import React from "react";

const MyDropDown = () => {
  return (
    <div
      className="dropdown show"
      style={{
        height: "100%",
        width: "100%",
        boxShadow: "none",
        border: `2px solid gray`,
        borderRadius: 5
      }}
    >
      <a
        className="btn dropdown-toggle w-100 h-100"
        href="#"
        id="dropdownMenuLink"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{ boxShadow: "none" }}
      >
        HOTEL SONORA
      </a>

      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <a className="dropdown-item" href="#">
          HOTEL CALIFONIA
        </a>
        <a className="dropdown-item" href="#">
          HOTEL YANGON
        </a>
        <a className="dropdown-item" href="#">
          HOTEL MANDALAY
        </a>
      </div>
    </div>
  );
};
export default MyDropDown;
