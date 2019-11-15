import React, { useState, useEffect } from "react";
import { withMedia } from "react-media-query-hoc";

import bg1 from "../../assets/image/headers/contact/1.jpg";
import Header from "../app/Header";
import { fsc } from "../../helper/fontControlHelper";
import * as Colors from "../../config/color.config";
import * as Font from '../../config/font.config'

import AvailabilityCheck from "../home/components/checkAvailability";
import MyButton from "../../tools/myButton";

const CheckAvailabilityPage = props => {
  const { media } = props;
  const RoomData = JSON.parse(localStorage.getItem("RoomData"));
  const [availableRoom, setAvailableRoom] = useState(RoomData);

  return (
    <div>
      <Header bgimg={bg1} />
      <div className="container py-4">
        <AvailabilityCheck />
        <div className="py-4">
          {availableRoom.map((v, k) => (
            <div key={k}>
              {v.isAvailable ? (
                <div className='py-3 border-bottom w-100 text-center'>
                  <span
                    style={{
                      fontSize: fsc(media, 35),
                      fontFamily: Font.bodyTitle,
                      fontWeight: "bold",
                      color: Colors.bodyText
                    }}
                  >
                    {v.type}
                  </span>
                  <div className="d-flex flex-row py-3 flex-wrap w-100">

                    <div className="col-lg-4">
                      <img src={v.RoomImgUrl} className="w-100" />
                    </div>
                    <div className="col-lg-5 py-2">
                      <table className="text-left w-100">
                        <tbody style={{ fontSize: fsc(media, 15) }}>
                          <tr style={{ height: "1.5rem" }}>
                            <td style={{ fontSize: fsc(media, 15) }}>
                              <i className="fa fa-male px-2"></i>
                            </td>
                            <td>Max : {v.max} Person(s)</td>
                            <td style={{ fontSize: fsc(media, 15) }}>
                              <i className="fa fa-binoculars px-2"></i>
                            </td>
                            <td>View : {v.view}</td>
                          </tr>
                          <tr style={{ height: "1.5rem" }}>
                            <td style={{ fontSize: fsc(media, 15) }}>
                              <i className="fa fa-arrows-alt px-2"></i>
                            </td>
                            <td>Size : {v.size} m</td>
                            <td style={{ fontSize: fsc(media, 15) }}>
                              <i className="fa fa-bed px-2"></i>
                            </td>
                            <td>Bed : {v.bed}</td>
                          </tr>
                          <tr style={{ height: "1.5rem" }}>
                            <td style={{ fontSize: fsc(media, 15) }}>
                              <i className="fa fa-money px-2"></i>
                            </td>
                            <td>Price : {v.pricePerDay} $</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="col-lg-2 py-2">
                      <MyButton text={"Book Now"} height={"48px"} />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default withMedia(CheckAvailabilityPage);
