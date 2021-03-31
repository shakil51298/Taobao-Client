import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { userContext } from '../../App';
import taobaoLogo from '../../imges/taobao-logo.png'

const Header = () => {
    const [loggedInuser] = useContext(userContext)
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light border">
                <div className="container-fluid row">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <div className="col-md-9">
                            <Link to="/"><img className="logo" src={taobaoLogo} alt=""/></Link>
                            <Link to="/" className="m-2">Home</Link>    
                            <Link to="/orders" className="m-2">Orders</Link>
                            <Link to="/admin" className="m-2">Admin</Link>
                            <Link to="/Deals" className="m-2">Deals</Link>
                            <Link to="/about-taobao" className="m-2">About Us</Link>
                        </div>
                        <div className="col-md-3">
                            <span className="navbar-text">
                                {
                                    loggedInuser.isSignIn ? <Link to="/login" className="m-1">{loggedInuser.name || loggedInuser.email}</Link> : <Link to="/login" className="m-2">Login</Link>
                                }
                                {
                                    loggedInuser.isSignIn && <Link to="/login"><img className="ml-0 rounded-circle w-25" src={loggedInuser.photo} alt=""/></Link>
                                }
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
    );
};

export default Header;