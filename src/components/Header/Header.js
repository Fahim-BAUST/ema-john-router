import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop" activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod"
                }}>Shop</NavLink>
                <NavLink to="/review" activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod"
                }}>Order Review</NavLink>
                <NavLink to="/inventory" activeStyle={{
                    fontWeight: "bold",
                    color: "goldenrod"
                }}>Inventory</NavLink>

                {user.email ? <button onClick={logOut}>logout</button> :
                    <NavLink to="/login" activeStyle={{
                        fontWeight: "bold",
                        color: "goldenrod"
                    }}>Login</NavLink>}
            </nav>
        </div>
    );
};

export default Header;