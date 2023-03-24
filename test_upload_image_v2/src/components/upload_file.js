import React, { useState } from "react";
import axios from "axios";
import { useNavigate , Link } from 'react-router-dom';

function Upload_File() {
    const [image, setImage] = useState({ preview: '', data: '' });
    //const [status, setStatus] = useState('');
    const history = useNavigate();
    

    /*const saveImage = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/image',{
            image_name: image.data,
        });
        history("/");
    }*/

    const handleSubmit = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('file', image.data)
        /*const response = await fetch('http://localhost:5000/public/Upload', {
        method: 'POST',
        body: formData,
        })
        if (response) {
            setStatus(response.statusText)
        }*/

        // ใช้ axios
        await axios.post("http://localhost:5000/public/Upload", formData)
                    .then(res => console.log(res.data))
                    .catch(err => console.error(err));
                    history("/");
    }

    const handleFileChange = (e) => {
        const img = {
        preview: URL.createObjectURL(e.target.files[0]),
        data: e.target.files[0],
        }
        setImage(img)
    }

    const Refresh_page = (e) =>{
        window.location.reload(false);
    }
    return (
      <div class="container mb-3">
        <form onSubmit={handleSubmit}>
            <label for="formFile" class="form-label">Default file input example</label>
            <input class="form-control" type="file" id="formFile" onChange={handleFileChange} />

            <img src={image.preview?image.preview:'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'} class="img-thumbnail" alt="..." width='200' height='200'></img>
            <hr />
            <div className="mb-3">
                <button type='submit' class="btn btn-success">Upload</button>
                &nbsp;
                <button type='button' class="btn btn-info" onClick={Refresh_page}>Refresh</button>
                &nbsp;
                <Link to="/"><button type='button' class="btn btn-danger" onClick=''>Back</button></Link>
            </div>
        </form>
        
      </div>     
    );
  }
  
  export default Upload_File;