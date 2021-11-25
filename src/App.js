

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './page/Gallery';
import Upload from './page/Upload';
import Nav from './page/Nav';
import LoginPage from './page/LoginPage';
import PrivateRoute from './helpers/PrivateRoute';


const App = () => {

  // const isAuthenticated = !!localStorage.getItem("token")

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<LoginPage />} />

          <Route exact path='/upload' element={<PrivateRoute />}>
            <Route exact path='/upload' element={<Upload />} />
          </Route>
          {/* <PrivateRoute path="/upload/" element={<Upload/>}/> */}
          <Route path="/gallery" element={<PrivateRoute />}>
            <Route path="/gallery" element={<Gallery />} />
          </Route>
        </Routes>

      </Router>
    </div>


  )
}

export default App

