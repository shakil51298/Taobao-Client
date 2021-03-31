import React from 'react';
import { Link as a, Link } from 'react-router-dom';
import './Admin.css'
import editIco from '../../imges/edit 1.png'
import grid from '../../imges/grid 1.png'
import plus from '../../imges/plus 1.png'

const Admin = () => {

    return (
        <div className='container App d-flex justify-content-center align-items-center' style={{border:"1px solid red", height:"500px"}} >
           <div className='row'>
                <div className="col">
                    <Link className="btn btn-outline-danger w-100" to="/manageProduct">Manage Product</Link>
                </div>
                <div className="col">
                    <Link className="btn btn-outline-danger w-100" to="/addproducts">Add Product</Link>
                </div>
                <div className="col">
                    <Link className="btn btn-outline-danger w-100" to="/editProducts">Edit Product</Link>
                </div>
           </div>
        </div>
    );
};

export default Admin;