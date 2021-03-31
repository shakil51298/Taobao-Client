import React from 'react';
import { useHistory } from 'react-router';

const Product = (props) => {
    const { ProductPrice, name, productImgUrl, _id } = props.product
    const history = useHistory()
   
    const handleBuyNow = (id) =>{
        // console.log(id);
        history.push(`/procesChekout/${id}`)
    }
    return (
        <div className="col-md-4 mt-3 text-center">
        <div className="card">
            <img src={productImgUrl} className="card-img-top" alt="..."/>            
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
            <div className="row pb-2">
                <div className="col">
                    <h3>{ProductPrice} $</h3>
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
