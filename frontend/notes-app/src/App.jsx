import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';


const routes = 
  <Router>
    <Routes>
      <Route path='/dashboard' eaxct element={<Home/>} />
      <Route path='/login' eaxct element={<Login/>} />
      <Route path='/signup' eaxct element={<SignUp/>} />
    </Routes>
  </Router>

const App = () => {
  return (
    <div>{routes}</div>
  )
}

export default App