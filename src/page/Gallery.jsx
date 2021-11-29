import React from 'react'
import { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../App.css';
import { galleryimage } from '../redux/action';

const Gallery = () => {

    // const [data, setData] = useState([])
    // const [status,setStatus] = useState(true)
    const dispatch = useDispatch()
    const dataa = useSelector(state => state.galleryimages)
    useEffect(() => {
        fetchdata();
    }, [])

    const fetchdata = async () => {
        dispatch(galleryimage())
        // await fetch(`http://localhost:3050/images`)
        //     .then(resp => resp.json())
        //     .then(data => {
        //         console.log("data", data)                
        //         setData(data)
        //     })
        //     .catch(error =>{
        //         console.log(error)
        //         setStatus(false)
        //     }
        //         )
    }
    return (
        <div className="container" >
            <h1>Photos Gallery</h1>
            {/* {status === true ? */}
            {dataa.length>0 ? (
                dataa.map((data) =>
                    <img
                        src={data}
                        alt="profile picture"
                    />)
            ) :<h1>API Server is Not Responding</h1>}
        </div>
    )
}

export default Gallery
