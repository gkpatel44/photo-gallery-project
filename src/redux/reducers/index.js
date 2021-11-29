const value = {
    data: { asdf: 123 },
    userdata: {},
    galleryimages:[]
}

const reducers = (state = value, action) => {
    
    switch (action.type) {
        case 'ADDDATA': return {
            ...state,
            userdata: action.payload
        }
        case 'ADDIMAGE': return {
            ...state,
            data: action.payload
        }
        case 'LOGOUT': return {
            ...state,
            userdata: {}
        }

        case 'ADDGALLERYDATA': return {
            ...state,
            galleryimages: action.payload
        }

        default: return state

    }

}
export default reducers