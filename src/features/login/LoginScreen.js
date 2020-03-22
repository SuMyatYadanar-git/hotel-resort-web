import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import MyInput from '../../tools/myInput'

const LoginScreen = props => {
    const [showpwd, setshowpwd] = useState(false)

    return (
        <div className="container">
            <div className="text-center font-weight-bold pt-5">Welcome!</div>
            <div className="text-center py-3 "> <span className="px-2"><i class="fas fa-lock" /></span>Please login to this</div>

            <div className="d-flex justify-content-center align-items-center flex-lg-nowrap ">
                <div className="col-lg-6 col-md-10 col-sm-12 ">
                    <form>
                        <div className="form-group " >
                            <label>UserEmail :</label>
                            {/* <input type="email" name="email" className="form-control" /> */}
                            <MyInput type="email" id={"email"} placeHolder={"example@gmail.com"} />
                        </div>

                        <div className="form-group">
                            <label>Passwrod :</label>
                            {/* <input type="password" name="password" className="form-control" /> */}
                            <MyInput type={`${showpwd ? 'text' : 'password'}`} id={"password"} />
                            <div className="position-relative float-right"
                                style={{ top: -30, paddingRight: '20px', cursor: 'pointer', fontWeight: 'bold', }}>
                                <span style={{ color: "#666673" }} onClick={() => setshowpwd(!showpwd)}>
                                    {showpwd ?  <i className="far fa-eye"/>: <i className="far fa-eye-slash"/> }
                                </span>
                            </div>
                        </div>

                        <div >
                            <label />&nbsp;
                            <button type="button" class="btn btn-outline-secondary w-100"  >Login</button>
                        </div>
                    </form>
                    <div className="text-center py-2 pt-2">forget password?</div>
                </div>

            </div>

        </div>
    )
}
export default withRouter(LoginScreen);
