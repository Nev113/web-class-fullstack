import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar";
import "./Photo.css";
import Footer from '../components/Footer';

export default function Photo(){
    const id = useParams();
    const [image, setImage] = useState();
    const [uploadDate, setUploadDate] = useState();
    const dataType = image === undefined ? "" : image.data.contentType.split("/")[1];
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://web-class-fullstack.vercel.app/image/${id.id}`);
                setImage(response.data);
                setUploadDate(response.data.data.uploadDate);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[id, setImage]);
    if(image != undefined){
        console.log(image.data.data);
        console.log(image.data.contentType)
    }
    return(
        <>
        <Helmet>
            <title>Photo</title>
        </Helmet>
        <Navbar/>
        <div className="container main">
            <h1 className="text-center">Photo</h1>
            {image === undefined ? (
                <p>Loading ...</p>
            ) : (
                <>
                    <img
                        className="image-content-single"
                        src={URL.createObjectURL(
                            new Blob([new Uint8Array(image.data.data.data)], {
                                type: image.data.contentType,
                            })
                        )}
                        alt={image.data.idImage}
                    />
                    {image.data.uploadDate == undefined ? (
                        <p className='upload'>Upload Date : {"undefined"}</p>
                    ) : (
                        <p className='upload'>
                            Upload Date: {uploadDate}
                        </p>
                    )}
                    <button className="btn btn-primary">
                        <a
                            href={URL.createObjectURL(
                                new Blob([new Uint8Array(image.data.data.data)], {
                                    type: image.data.contentType,
                                })
                            )}
                            download={"classx4-" + image.data.idImage+"."+dataType}
                        >
                            Unduh Gambar
                        </a>
                    </button>
                </>
            )}
        </div>
        <Footer />
        </>
    )
}
