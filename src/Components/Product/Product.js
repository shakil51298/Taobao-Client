import { Card, Button } from 'bootstrap';
import React from 'react';
import { useHistory } from 'react-router';

const Product = (props) => {
    const { ProductPrice, ProductWeight, name, productImgUrl, _id } = props.product
    const history = useHistory()
   
    const handleBuyNow = (id) =>{
        // console.log(id);
        history.push(`/procesChekout/${id}`)
    }
    return (
        <div className="card w-25">
            <img src={productImgUrl} className="card-img-top w-100" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="row">
                    <div className="col">
                        <h3 className="text-danger">{ProductPrice}$</h3>
                    </div>
                    <div className="col">
                        <button onClick={()=>handleBuyNow(_id)} className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;<h1>this is product page!!</h1>