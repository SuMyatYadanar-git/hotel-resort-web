import React from 'react'

import '../../App.css'

const UpgradePage = props => {
    //     const bgStyle = {
    //         paddingTop: '100rem',
    //         paddingBottom:'20rem',
    //         background: `url(${bg1}) no-repeat center center fixed`,
    //         width: '88%',
    //         backgroundImage: `url(${bg1})`,
    //         backgroundAttachment: 'fixed',
    //         backgroundPosition: "center",
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //         webkitBackgroundSize:' cover',
    //         mozBackgroundSize: 'cover',
    //         oBackgroundSize:' cover',
    //         minHeight:'100vh',
    //         textShadow: "1px 1px grey",
    //         boxSizing: "border-box",
    //         textAlign: "center",
    //         backgroundSize: '100vh 100vh ',
    //         minHeight: '100vh',
    // };

    return (
        <div className="container-fluid p-0">
            <div className="bg-dim full-bg-size ">

                <div className="d-flex flex-column align-items-center text-light " style={{ position: 'absolute', top: '28%', width: '98%', paddingLeft: '2%' }}>
                    <div className="py-0"><h1>COMING SOON </h1> </div>
                    <div className="py-2"><h5> WE ARE WORKING HARDER! </h5></div>
                    <div className="py-2 pb-4"><h6> The website will be open</h6></div>

                    <div className="d-flex justify-content-around bg-transparent border border-light col-lg-6 col-12 p-0 py-3" >

                        <div className="d-flex flex-column align-items-center px-3 py-2 " >
                            <span>00</span>
                            <span>DAYS</span>
                        </div>

                        <div className="d-flex flex-column align-items-center px-3 py-2" >
                            <span>00</span>
                            <span>HOURS</span>
                        </div>

                        <div className="d-flex flex-column align-items-center px-3 py-2" >
                            <span>00</span>
                            <span>MINUTES</span>
                        </div>

                        <div className="d-flex flex-column align-items-center px-3 py-2">
                            <span>00</span>
                            <span>SECONDS</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
};
export default UpgradePage;

