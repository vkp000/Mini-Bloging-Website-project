import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import './App.css'
import authService from './appwrite/auth';
import {login, logout} from "./store/authSlice"; 
import {Header, Footer} from './components';
import { Outlet } from 'react-router-dom';



function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({userData}));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  },[])

return !loading ? (
  <div className='min-h-sc flex flew-wrap content-between bg-white'>
    <div className='w-full block'>
      <Header />
      <main>
        <Outlet/>
      </main>
      <Footer />
    </div>
  </div>
) : (null)
}

export default App
