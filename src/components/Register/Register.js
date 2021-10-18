import React from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container text-center w-25 mx-auto border border-1 mt-5 rounded-3 ">
            <h3 className="mt-3 mb-3 text-start fs-3 ">Create Account</h3>
            <form className="text-start  " onSubmit="">
                <label htmlFor="inputName4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Your name</label>
                <input type="text" className="form-control border border-secondary" id="inputName4" />
                <label htmlFor="inputEmail4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Email</label>
                <input type="email" className="form-control border border-secondary" id="inputEmail4" />

                <label htmlFor="inputPassword4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Password</label>
                <input type="password" className="form-control border border-secondary" id="inputPassword4" />

                <button type="submit" style={{ backgroundColor: "goldenrod", color: "black" }} className="btn fw-bold col-xl-12 col-12 col-md-12 mt-3">Continue</button>
            </form>
            <p className="text-start mt-2" style={{ fontSize: "13px" }}>Allready registered? <NavLink className="text-decoration-none" to="/Login">Sign in</NavLink></p>

        </div>

    );
};

export default Register;