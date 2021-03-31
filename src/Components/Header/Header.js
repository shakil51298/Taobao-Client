import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="row">
            <div className="col">
                <Link to="/"><h1>Taobao</h1></Link>
            </div>
            <div className="col m-3">
                <Link to="/" className="m-2">Home</Link>
                <Link to="/order" className="m-2">Orders</Link>
                <Link to="/admin" className="m-2">Admin</Link>
                <Link to="/deals" className="m-2">Deals</Link>
                <Link to="/userlogin" className="m-2">User</Link>
                <Link to="/login" className="m-2">Login</Link>
            </div>
        </div>
    );
};

export default Header;