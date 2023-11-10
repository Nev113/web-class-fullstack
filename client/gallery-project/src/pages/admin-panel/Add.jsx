import axios from 'axios';
import React, { useState } from 'react';
import "./Add.css"

export default function Add() {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        const response = await axios.post('http://localhost:5000/image', formData);
        if (response.data.status == "success") return window.location.href = "/admin"
    }
    return (
        <div className='container m-5 container-add'>
        <h2 className='mb-4'>Adding Image</h2>
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleImageChange} />
            <button type="submit" className='btn btn-success'>Upload</button>
        </form>
        </div>
    );
}