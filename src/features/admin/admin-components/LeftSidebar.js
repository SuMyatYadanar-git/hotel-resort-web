import React, { useState } from 'react'

const SideNavbar = props => {
    const [sidebarOpen, setsidebarOpen] = useState(false)
    return (
        <div className="">

            <div className="h-100">

                <div className={`d-flex flex-column ${sidebarOpen ? 'col-2' : 'col-lg-1 '}`}>

                    <div className="py-2 d-flex" >
                        <div className=" " >
                            <span className="border p-1" style={{fontSize:25,borderRadius:5}} onClick={() => setsidebarOpen(!sidebarOpen)}>
                                <i class="fas fa-bars"/>
                            </span>
                        </div>
                        {sidebarOpen &&
                             <div className="ml-auto px-1" onClick={() => setsidebarOpen(!sidebarOpen)}>
                              <span ><i className="fas fa-times" /></span> 
                             </div>
                        }
                    </div>
                    {
                        sidebarOpen &&
                        <div className="border rounded ">
                            <div className={`d-flex justify-content-between align-items-center rounded py-3 px-1  `}
                                style={{ borderBottom: '1px solid black', }}
                            >
                                <div> Dashboard</div>
                                <div><i class="fas fa-home"></i></div>

                            </div>
                        </div>
                    }

                </div>

            </div>
        </div >
    )
}
export default SideNavbar;