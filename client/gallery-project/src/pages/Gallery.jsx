import { useState, useEffect } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import "./Gallery.css";
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';

function ImageGallery() {
  const [images, setImages] = useState([]);
  let statusCode = 'loading';
  const statusCodeRef = useRef('loading');

  useEffect(() => {
    async function getImages() {
      try{
        const response = await axios.get('https://web-class-fullstack.vercel.app/image');
        setImages(response.data);
      } catch (err) {
        console.log(err);
      }
      statusCodeRef.current = 'ready';
    }
    getImages();
  }, []);
  function handleImageClick(image) {
    window.location.href = `/Photo/${image.idImage}`;
  }
  if (statusCodeRef.current === 'ready') {
    console.log(images);
  }
  console.log(images)
  statusCode = statusCodeRef.current;
  return (<>
    <Helmet>
      <title>Gallery</title>
    </Helmet>
    <Navbar/>
    <div className="main">
      <h1 className='main-text'>Gallery</h1>
      <div className="image-list">
        {statusCode === 'loading' && <p className='info'>Loading... / Under Maintenance...</p>}
        {statusCode === 'error' && <p className='info'>Something went wrong...</p>}
        {statusCode === 'ready' && images.length === 0 && (
          <p className='info'>There are no images...</p>
        )}
        <div className='image-container'>
        {statusCode === 'ready' && images.length > 0 && images.map((image) => (
          <div key={image._id}>
            <img className='image-content'
              src={URL.createObjectURL(
                new Blob([new Uint8Array(image.data.data)], {
                  type: image.contentType,
                })
              )}
              alt={image.idImage} onClick={() => {handleImageClick(image)}}
            />
            <div className='upload-date'>{image.uploadDate === undefined ? "unknown" : image.uploadDate}</div>
          </div>
        ))}
        </div>
      </div>
    </div>
    </>
  );


}

export default ImageGallery;
