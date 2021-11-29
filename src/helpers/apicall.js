export const fetchdata = async (url) => {
    await fetch(url)
        .then(resp => resp.json())
        .then(data => {
           return data           
         })
        .catch(error =>{
            console.log(error)
           return error
        }
            )
}