import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { userContext } from '../../App';
import taobaoLogo from '../../imges/taobao-logo.png'
import {Navbar , Nav , NavDropdown , Form , Button , FormControl} from 'react-bootstrap'

const Header = () => {
    const [loggedInuser] = useContext(userContext)
    return (
        // <nav className="navbar navbar-expand-lg navbar-light bg-light border">
        <Navbar bg="light" expand="lg">
            <Navbar.Brand><Link className= "text-decoration-none text-danger ">TAOBAO</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="m-2 text-decoration-none">Home</Link>
                    <Link to="/orders" className="m-2 text-decoration-none">Orders</Link>
                    <Link to="/admin" className="m-2 text-decoration-none">Admin</Link>
                    <NavDropdown title="More" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">
                            <Link to="/Deals" className="m-2 text-decoration-none">Deals</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            <Link to="/about-taobao" className="m-2 text-decoration-none">About Us</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <span className="navbar-text"></span>
                {
                    loggedInuser.isSignIn ? <Link to="/login" className="m-1 text-decoration-none">{loggedInuser.name || loggedInuser.email}</Link> : <Link to="/login" className="m-2 text-decoration-none">Login</Link>
                }
                {
                    loggedInuser.isSignIn && <Link to="/userProfile"><img className="ml-0 rounded-circle w-25" src={loggedInuser.photo} alt="profile photo" /></Link>
                }
                
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;

