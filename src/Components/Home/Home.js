import React, { useContext, useEffect, useState } from 'react';
import { productContext } from '../../App';
import Product from '../Product/Product';

const Home = () => {
    const [product , setProduct] = useContext(productContext)
    useEffect(() => {
        const url = `http://localhost:5055/products`
        fetch(url)
        .then(response => response.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className="container">
            <h2>this is Home page!!</h2>  
            <div className="row g-4">
                {
                    product.length === 0 && <div class="spinner-border text-danger" role="status">
                            <span class="visually-hidden"></span>
                    </div>
                }
                {
                    product.map(pd => <Product product = {pd} key = {pd._id}></Product>)
                }
            </div>
        </div>
    );
};

export default Home;    <h2>this is Home page!!</h2>