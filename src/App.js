

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Gallery from './page/Gallery.jsx';
import Upload from './page/Upload.jsx';
import Nav from './page/Nav.jsx';
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
            <Route forceRefresh={true} exact path='/upload' element={<Upload />} />
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

