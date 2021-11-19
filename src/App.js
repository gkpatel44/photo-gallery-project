
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Gallery from './page/Gallery';
import Upload from './page/Upload';
import Nav from './page/Nav';


const App = () => {
 
  return (
    <div>
      <Router>
        <Nav/>        
        <Routes>
          <Route path="/upload" element={<Upload/>}/>
          <Route path= "/gallery" element={<Gallery/>}/>
        </Routes>

      </Router>
    </div>
  

  )
}

export default App

