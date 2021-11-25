import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Nav = () => {
    const auth = !!localStorage.getItem('token')
    return (
        <div style={styles.div}>
            <Link style={styles.link} to="/">Login</Link>
            {auth ? <> <Link style={styles.link} to="/upload" >Upload Files</Link>
                <Link style={styles.link} to="/gallery">Gallery</Link></> : null}

        </div>
    )
}
const styles = {
    div: {
        margin: "0px 0px 7px 0px",
        padding: "5px 0px 34px 3px",
        backgroundColor: "#a6a6a8"
    },
    link: {

        color: "#4b24de",
        margin: " 39px",
        paddingTop: " 34px"

    }
}


export default Nav
