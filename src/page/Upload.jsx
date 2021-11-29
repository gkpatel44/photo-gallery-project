import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import '../App.css';
import Cards from '../helpers/Cards';


const Upload = () => {
    const [images, setimages] = useState([])
    const [dataa, setData] = useState({})
    const udata = JSON.parse(localStorage.getItem('data'))
    const states = useSelector(state => state.userdata)
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = () => {
        console.log(states);
        setData(location.state)
    }

    const handleupload = (e) => {
        e.preventDefault();
        console.log(e.target.files[0])
        let file = e.target.files[0]
        if (file.name.match(/\.(jpg|jpeg|png|gif)$/)) {
            setimages({ file })
        }
        console.log("file type invalid");
    }

    const handlefileupload = (e) => {

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
            .then(data => {
                console.log(data)
                if (data.status == 200) {
                    navigate('/gallery')
                }
                console.log(data.msg)
            })
            .catch(error => console.log(error))
    }

    return (


        <div style={styles.maindiv}>
            <input type="file" onChange={handleupload} />
            <button onClick={handlefileupload}>Upload</button>
            {/* <Cards data={udata} images={udata.picture.data.url} /><br/> */}
            {states.picture ? <Cards data={states} images={states.picture.data.url} /> : null}
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
