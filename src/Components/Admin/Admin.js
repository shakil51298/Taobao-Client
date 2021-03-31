import React from 'react';
import { Link as a, Link } from 'react-router-dom';
import './Admin.css'
import editIco  from '../../imges/edit 1.png'
import grid  from '../../imges/grid 1.png'
import plus  from '../../imges/plus 1.png'

const Admin = () => {
    
    return (
        <div className='container' >
            <div className="row">
               <div className=" main col-md-4">
                   <div className="text-center text-light">
                       <h1>Taobao</h1>
                   </div>
                   <div className="text-center">
                       <Link to= '/addproducts'>Add Product</Link>
                   </div>
                   <div className="text-center">
                       <Link to= '/manageProduct'>Manage Product</Link>
                   </div>
                   <div className="text-center">
                       <Link to= '/admin'>Edit Product</Link>
                   </div>
               </div>
               <div className="col-md-8">
                   <h1>shkail</h1>
               </div>
            </div>
        </div>
    );
};

export default Admin;