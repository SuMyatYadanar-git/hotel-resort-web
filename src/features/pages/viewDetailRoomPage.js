import React, { useState } from "react";
import originalMoment from 'moment'
import { extendMoment } from 'moment-range'
import { Link } from 'react-router-dom'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bg1 from "../../assets/image/headers/contact/1.jpg";
import Header from "../app/Header";
import VD from "../../assets/image/view/vp.jpg";
import Vd1 from "../../assets/image/view/vp2.jpg";
import Vd2 from "../../assets/image/view/vp1.jpg";
import Vd3 from "../../assets/image/view/vp3.jpg";
import Vd4 from "../../assets/image/view/vp4.jpg";
import Vd5 from "../../assets/image/view/vp2.jpg";

import * as route from '../../config/route.config'
import MyDatePicker from '../../tools/myDatePicker'
import MyButton from '../../tools/myButton'
import Footer from '../app/footer'

const ViewDetailRoomPage = () => {
  const moment = extendMoment(originalMoment)
  const today = moment()
  const [isOpen, setIsOpen] = useState(false)

  const [value, setValue] = useState(moment.range(today.clone().subtract(7, 'days'), today.clone()))
  const endDate = value.end.format("DD-MMM-YYYY")
  const startDate = value.start.format("DD-MMM-YYYY")

  const _handleSelect = (value) => {
    setValue(value)
    _handleToggle()
  }
  const _handleToggle = () => { setIsOpen(!isOpen) }
  return (
    <div>
      <Header bgimg={bg1} />
      <div className="container">
        {/* carousel */}
        <div className="d-flex flex-row flex-wrap">
          <div className="col-lg-6 pt-2 p-0">
            <Carousel
              showIndicators={false}
              dynamicHeight={true}
              showStatus={false}
              showArrows={false}
            >
              <div>
                <img src={VD} alt="vvp" />
                <p
                  className="legend"
                  style={{
                    backgroundColor: "black",
                    opacity: 0.4,
                    position: "absolute",
                    fontWeight: "bold",
                    fontSize: "15px"
                  }}
                >
                  Family Room
            </p>
              </div>
              <div>
                <img src={Vd1} alt="vvp1" />
                <p
                  className="legend"
                  style={{
                    backgroundColor: "black",
                    opacity: 0.5,
                    position: "absolute",
                    fontWeight: "bold",
                    fontSize: "15px"
                  }}
                >
                  Family Room
            </p>
              </div>
              <div>
                <img src={Vd2} alt="vvp3" />
                <p
                  className="legend"
                  style={{
                    backgroundColor: "black",
                    opacity: 0.5,
                    position: "absolute",
                    fontWeight: "bold",
                    fontSize: "15px"
                  }}
                >
                  Family Room
            </p>
              </div>
              <div>
                <img src={Vd3} alt="vvp5" />
                <p
                  className="legend"
                  style={{
                    backgroundColor: "black",
                    opacity: 0.5,
                    position: "absolute",
                    fontWeight: "bold",
                    fontSize: "15px"
                  }}
                >
                  Family Room
            </p>
              </div>
              <div>
                <img src={Vd4} alt="vvp6" />
                <p
                  className="legend"
                  style={{
                    backgroundColor: "black",
                    opacity: 0.5,
                    position: "absolute",
                    fontWeight: "bold",
                    fontSize: "15px"
                  }}
                >
                  Family Room
            </p>
              </div>
              <div>
                <img src={Vd5} alt="vvp7" />
                <p
                  className="legend"
                  style={{
                    backgroundColor: "black",
                    opacity: 0.5,
                    position: "absolute",
                    fontWeight: "bold",
                    fontSize: "15px"
                  }}
                >
                  Family Room
            </p>
              </div>
            </Carousel>
          </div>
          {/* ================================================================ */}

          <div className="pt-2 col-lg-6 p-0">
            <div className="d-flex flex-column text-center p-1" style={{ backgroundColor: '#F1F1F1' }}>
              <div className="pt-3 py-3 font-weight-bold" style={{ fontSie: '5rem' }}>{"LUXURY ROOM"}</div>
              <div className="py-3" style={{ fontSize: '2rem', color: 'grey' }}>{"Start from $300/night"}</div>
              <div className="p-2 border ">
                <div className="py-3  ">
                  <div>Arrival Date </div>
                  <div >  <MyDatePicker Date={startDate} HandleSelect={_handleSelect} value={value} HandleToggle={_handleToggle} IsOpen={isOpen} /></div>
                </div>
                <div className="py-4 ">
                  <div>DEPARTURE DATE</div>
                  <div>  <MyDatePicker Date={endDate} HandleSelect={_handleSelect} value={value} /></div>
                </div>
                {/* ================================= */}
              </div>
              <div className="pt-4 ">
                <Link to={`/${route.checkavailability}`} ><MyButton text="CHECK AVAILABILITY" /> </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
      <Footer />
    </div>
  );
};
export default ViewDetailRoomPage;
