import React, {useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [product , setProduct] = useState([])
    useEffect(() => {
        const url = `https://desolate-mesa-13156.herokuapp.com/products`
        fetch(url)
        .then(response => response.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className="container mt-3 mb-5">
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