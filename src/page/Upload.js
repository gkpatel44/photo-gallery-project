import React, { useState } from 'react'


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
    const formData = new FormData();
    formData.append('file',images)
    const option ={
        method:'POST',
        headers:{'Content-type':'multipart/form-data'},
        body:formData
    }
    fetch('url',option)

       
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
