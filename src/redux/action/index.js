import { fetchdata } from "../../helpers/apicall"

export const storedata = (data) => {
    return {
        type: 'ADDDATA',
        payload: data
    }
}

export const addimage = (data) => {
    return {
        type: "ADDIMAGE",
        payload: data
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',

    }
}

export const galleryimage =  () =>async dispatch=> {

   const response = await fetch(`http://localhost:3050/images`)
    .then(resp => resp.json())
        .then(data => {
            console.log(data);
            return data
        })
        .catch(error => {
            console.log(error)
            return error
        }
        )
    
    // dispatch({type: 'ADDFGALLERYDATA',payload: response}) 
    dispatch( { type: 'ADDGALLERYDATA', payload: response })

}