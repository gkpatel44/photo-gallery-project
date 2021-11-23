import React from 'react'
import { useEffect, useState, } from 'react';
import '../App.css';

const Gallery = () => {

    const [data, setData] = useState([])
    const [status,setStatus] = useState(true)
    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        await fetch(`http://localhost:3050/images`)
            .then(resp => resp.json())
            .then(data => {
                console.log("data", data)                
                setData(data)
            })
            .catch(error =>{
                console.log(error)
                setStatus(false)
            }
                )
    }
    return (
        <div className="container" >
            <h1>Photos Gallery</h1>
            {status === true ?
                data.map((dataa) =>
                    <img
                        src={dataa}
                        alt="images here"
                    />):
                    <h1>API Server is Not Responding</h1>}
        </div>
    )
}

export default Gallery
