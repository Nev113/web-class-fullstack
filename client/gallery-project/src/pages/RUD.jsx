import { useEffect, useState } from "react";
import axios from "axios";

export default function RUD(){
    const [data, setData] = useState();
    async function handleDelete (id){
        const answer = window.confirm("Apakah Anda Yakin?")
        if (!answer) return window.location.href("/admin/rud")
        const response = await axios.delete("http://localhost:5000/image/"+id);
        if (response.data.status == "success") return window.location.href = "/admin/rud";
        return console.log("gagal", response)
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:5000/image/");
                setData(response.data);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, []);
    return (<>
        <div className="container mt-5">
            <h2>Crud Image</h2>
            <ul>
            <div className="image-list">
            {data === undefined ? <h3>Loading...</h3> : (data.map(image => (
                <li key={image._id}>
                    <p>{image.idImage}</p>
                    <img className='image-content'
              src={URL.createObjectURL(
                new Blob([new Uint8Array(image.data.data)], {
                  type: image.contentType,
                })
              )}
              alt={image.idImage}
            />
                <button className="btn btn-danger" onClick={() => handleDelete(image.idImage)}>Delete</button>
                </li>
            )))}
            </div>
            </ul>
        </div>
        </>
    )
}