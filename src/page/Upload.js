import React, { useState } from 'react'
import '../App.css';


const Upload = () => {
const [images, setimages] = useState([])

    const handleupload = (e) => {
        e.preventDefault();
       console.log(e.target.files[0])
       let file = e.target.files[0]
       setimages({file})

    }

    const handlefileupload = (e) => {
        e.preventDefault();
        console.log(images.file);
    const formData = new FormData();
    formData.append('file',images.file)
   
    const option ={
        method:'POST',
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'multipart/form-data',
        //   },
        body:formData
    }
    fetch('http://localhost:3050/upload',option)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(error=>console.log(error))

       
    }

    return (
        <div style={styles.maindiv}>
            <input
                type="file"
                onChange={handleupload}
            />
            <button onClick={handlefileupload}>Upload</button>

         
        </div>
    )
}
const styles = {
    maindiv: {
        minHeight: "203px",
        maxWidth: "1300px",
        margin: "20px auto",
        paddingLeft: "15px",
        paddingRight: " 15px",
        backgroundColor: " #bbbbbb",
        borderRadius: "18px",
    }
}
export default Upload
