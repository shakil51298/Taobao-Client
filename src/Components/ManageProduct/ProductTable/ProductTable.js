import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeleteIco from "../../../imges/delete.png"

const ProductTable = (props) => {
    const {name , productImgUrl,ProductWeight,ProductPrice, _id} = props.product;
    console.log(props.product);

    const handleDeleteProduct = (id) =>{
        const url = `http://localhost:5055/delete/product/${id}`
        fetch(url, {method:"DELETE"})
        .then(res => console.log(res))
    }

    return (
            <tr>
                <th scope="row">{name}</th>
                <td><img className='' style={{width:"50px"}} src={productImgUrl} alt=""/></td>
                <td>{ProductWeight}</td>
                <td>{ProductPrice}</td>
                <td className="text-danger"><Link onClick={()=>handleDeleteProduct(_id)}> 
                    <img style={{width:'20px'}} src={DeleteIco} alt=""/>
                </Link></td>
            </tr>
    );
};

export default ProductTable;

