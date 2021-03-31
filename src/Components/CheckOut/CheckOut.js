import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { productContext } from '../../App';

const CheckOut = () => {
    const [checkOut, setCheckOut] = useState({})
    console.log(checkOut);
    const {name,ProductPrice,ProductWeight} = checkOut;
    const {id} = useParams();
    useEffect(()=>{
        const method = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},

        }
        fetch(`http://localhost:5055/product/${id}`)
        .then(res=>res.json())
        .then(data => setCheckOut(data[0]))
    })
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
                            <button className="btn btn-primary">Check Out</button>
                    </tbody>
            </table>
            </div>
        </div>
    );
};

export default CheckOut;