import React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const { user, signInGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    // console.log("came from", location.state?.from);
    const redirects = location.state?.from || "/";
    const handleSignin = () => {
        signInGoogle()
            .then((result) => {
                const user = result.user;
                history.push(redirects);
            })

    }
    return (
        <div className="container text-center w-25 mx-auto border border-1 mt-5 rounded-3 ">
            <h2 className="mt-3 mb-3 text-start fs-3 ">Login</h2>
            <form className="text-start " onSubmit="">
                <label htmlFor="inputEmail4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Email</label>
                <input type="email" className="form-control border border-secondary" id="inputEmail4" />

                <label htmlFor="inputPassword4" style={{ fontSize: "13px" }} className="form-label fw-bold ">Password</label>
                <input type="password" className="form-control border border-secondary" id="inputPassword4" />

                <button type="submit" style={{ backgroundColor: "goldenrod", color: "black" }} className="btn fw-bold col-xl-12 col-12 col-md-12 mt-3">Sign in</button>
            </form>
            <p className="text-start mt-2" style={{ fontSize: "13px" }}>new to amazon?<NavLink className="text-decoration-none" to="/register">Create Account</NavLink></p>
            <div>--------------or-------------</div>
            <button onClick={handleSignin} className="btn btn-secondary">Google Signin</button>
        </div>
    );
};

export default Login;