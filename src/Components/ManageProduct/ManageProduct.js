import React, {  useEffect, useState } from 'react';
import ProductTable from './ProductTable/ProductTable';

const ManageProduct = () => {
    const [product , setProduct] = useState([])

    useEffect(() => {
        const url = `https://desolate-mesa-13156.herokuapp.com/products`
        fetch(url)
        .then(response => response.json())
        .then(data => setProduct(data))
    },[])
    return (
        <div className="container table-responsive">
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Img</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Price</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.length === 0 && <div class=" spinner-border text-danger" role="status">
                        <span class="visually-hidden"></span>
                        </div>
                    }
                    {
                        product.map(product =><ProductTable product ={product} key={product._id}></ProductTable>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;



