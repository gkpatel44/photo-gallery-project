
import './App.css';
import  { useEffect, useState,} from 'react'

const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
  fetchdata();
  }, [])

  const fetchdata = async ()=>{
    await fetch(`https://reqres.in/api/users?page=2`)
    .then(resp=>resp.json())
    .then(data=>{
    console.log(data.data)
    setData(data.data)})
  }
  return (
    <div className="container" >
      <h1>Photos Gallery</h1>
      {data.map((dataa)=>

         
     <img 
     src={dataa.avatar}
      />)}
    </div>
  )
}

export default App

