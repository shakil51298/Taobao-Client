import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProducts = () => {

    const { register, handleSubmit} = useForm();
    // state
    const[productImgUrl , setProductImgUrl] = useState(null)

    // POST
    const onSubmit = data => {
        const producUploadingData = {
            name : data.name,
            productImgUrl : productImgUrl,
            ProductWeight: data.weight,
            ProductPrice : data.price
        }
        // console.log(producUploadingData);
        const url = `http://localhost:5055/addProducts`
        const method = {
            method: "POST",
            body: JSON.stringify(producUploadingData),
            headers:{'Content-type' : 'application/json'}
        }
        fetch(url, method )
        .then(response => console.log(response));
    };
    
    // image upload event handler
    const  handleUploadImage = (e) => {
        const imageData = new FormData(); // object
        imageData.set('key' , '8f8e8714542fcc684949127b840d41d1');
        imageData.append('image', e.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(res => {
            setProductImgUrl(res.data.data.display_url)
        })
        .catch(error  =>{
            console.log(error)
        })
    }
    return (
        <div>
            <h1>Add New products from here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder="Product Name" defaultValue="pran potato crackers" ref={register} />
                <br/>
                <input name="weight" placeholder="Weight" defaultValue="50gm" ref={register} />
                <br/>
                <input name="price" placeholder="Price" defaultValue="50$" ref={register} />
                <br/>
                <input type="file" name="exampleRequired" onChange={handleUploadImage} ref={register({ required: true })} />
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;