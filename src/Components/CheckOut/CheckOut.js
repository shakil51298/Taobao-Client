import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { userContext } from '../../App';

const CheckOut = () => {
    const [loggedInuser , setloggedInuser] = useContext(userContext)
    const [checkOutProducts, setCheckOut] = useState({})
    const {name,ProductPrice,ProductWeight} = checkOutProducts;
    const {id} = useParams();
    useEffect(()=>{
        const method = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},

        }
        fetch(`http://localhost:5055/product/${id}`)
        .then(res=>res.json())
        .then(data => setCheckOut(data[0]))
    },[id])

    const handlePlaceOrder = () =>{
        const orderDetails = {...loggedInuser , product : checkOutProducts ,  orderTime : new Date()}
        // console.log(orderDetails);
        const url = `http://localhost:5055/addOrder`
        const send = {
            method:'POST',
            headers : {'Content-type' : 'application/json'},
            body:JSON.stringify(orderDetails)
        }
        fetch(url, send)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data && alert("your order placedd successfully")
        })
    }
    return (
        <div>
            <div className="container table-responsive">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <th scope="row">{name}</th>
                            <td>{ProductWeight}</td>
                            <td>{ProductPrice} $</td>
                        </tr>
                        <tr>
                            <th scope="row">Total</th>
                            <td></td>
                            <td>{ProductPrice } $</td>
                        </tr>
                            <button onClick={handlePlaceOrder} className="btn btn-primary">Confirm Order</button>
                    </tbody>
            </table>
            </div>
        </div>
    );
};

export default CheckOut;