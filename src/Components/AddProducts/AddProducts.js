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
        const url = `https://desolate-mesa-13156.herokuapp.com/addProducts`
        const method = {
            method: "POST",
            body: JSON.stringify(producUploadingData),
            headers:{'Content-type' : 'application/json'}
        }
        fetch(url, method )
        .then(response => alert('product added succesfully!!'));
    };
    
    // image upload event handler
    const  handleUploadImage = (e) => {
        const imageData = new FormData(); // object
        console.log(imageData);
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
        <div className="container">
            <h1 className="text-center">Add New products from here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" className="form-control" placeholder="Product Name" defaultValue="pran potato crackers" ref={register} />
                <br/>
                <input name="weight" className="form-control" placeholder="Weight" defaultValue="50gm" ref={register} />
                <br/>
                <input name="price" className="form-control" placeholder="Price" defaultValue="50" ref={register} />
                <br/>
                <input class="form-control" type="file" id="formFile" onChange={handleUploadImage} ref={register({ required: true })} />
                <br/>
                <input className="btn btn-primary w-100" type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;