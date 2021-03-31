import React from 'react';

const OrderCard = (props) => {
    const {_id ,name , productImgUrl , ProductPrice , ProductWeight} = props.ordedData.product
    const { orderTime} = props.ordedData;
    
    return (
        <div className="col-md-4 mt-3 text-center">
            <div className="card">
                <img src={productImgUrl} className="card-img-top" alt="..."/>            
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">price : {ProductPrice} $.</p>
                    <p className="card-text">weight : {ProductWeight} $.</p>
                    <p className="card-text">order Id : {_id} $.</p>
                    <p className="card-text">Order time : {orderTime} $.</p>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
<h1>this is order card</h1>