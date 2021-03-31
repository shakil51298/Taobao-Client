import React, { useContext, useEffect } from 'react';
import { productContext } from '../../App';
import Admin from '../Admin/Admin';
import ProductTable from './ProductTable/ProductTable';

const ManageProduct = () => {
    const [product , setProduct] = useContext(productContext)

    useEffect(() => {
        const url = `http://localhost:5055/products`
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
                        product.length == 0 && <h1>Loading...</h1>
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



