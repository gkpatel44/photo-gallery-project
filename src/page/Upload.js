import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import '../App.css';
import Cards from '../helpers/Cards';


const Upload = () => {
    const [images, setimages] = useState([])
    const [data, setData] = useState({})
    const location = useLocation();


    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = () => {
        setData(location.state)
       
    }


    const handleupload = (e) => {
        e.preventDefault();
        console.log(e.target.files[0])
        let file = e.target.files[0]
        setimages({ file })
    }

    const handlefileupload = (e) => {
        console.log("state", location.state);
        e.preventDefault();
        console.log(images.file);
        const formData = new FormData();
        formData.append('file', images.file)

        const option = {
            method: 'POST',
            // headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'multipart/form-data',
            //   },
            body: formData
        }
        fetch('http://localhost:3050/upload', option)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))


    }

    return (
        <div style={styles.maindiv}>
            <input
                type="file"
                onChange={handleupload}
            />
            <button onClick={handlefileupload}>Upload</button>
            <Cards  data={data} />
            


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
    },

    tdth: {
        width: "94.2812px",
        border: "2px solid black"

    },
    tdthdis: {
        width: "94.2812px",
        display: "none",
        border: "2px solid black"

    }
}
export default Upload
