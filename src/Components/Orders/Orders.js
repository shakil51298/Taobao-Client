import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import OrderCard from './OrderCard/OrderCard';

const Orders = () => {
    const [loggedInuser ] = useContext(userContext)
    const [orders , setOrders] = useState([])

    useEffect(()=>{
        const url = `http://localhost:5055/orders?email=${loggedInuser.email}`
        const send = {
            method: 'GET',
            headers: {'Content-type' : 'application/json'},
            // authorization : `Bearer ${se}`
        }
        fetch(url, send)
        .then(res =>res.json())
        .then(data => setOrders(data))
    },[loggedInuser.email])

    return (
        <div className="container">
            <h1 className="text-center mt-5">You have total {orders.length} order are here</h1>
            <div className="row row-cols-1 row-cols-md-1 g-5 mt-5">
            {
                orders.map(orderData => <OrderCard ordedData = {orderData} key={orderData._id}></OrderCard>)
            }
            </div>
            
        </div>
    );
};

export default Orders;<h1>this is orders page</h1>