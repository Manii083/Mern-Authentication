import {BrowserRouter as Router , Routes, Route, Navigate} from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);
  const [eroor, setError] = useState("");

useEffect(() => {
  const fetchUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const res = await axios.get("/api/users/me", {
          Headers: { Authorization: `Bearer ${token}`},
        });
        setUser(res.data);
      } catch (error) {
        setError("Failed to fetch user data");
        localStorage.removeItem("token");
      }
    }
  };
  fetchUser();
}, []);

  return (
    <Router>
      < Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App
