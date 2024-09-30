import React, { useEffect } from 'react'
import {Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Backend/firebase'
import Chat from './pages/Chat'
import { useContext } from 'react'
import { AppContext } from './AppContext/AppContext'
import ProfileUpdate from './pages/ProfileUpdate'

const App = () => {
  const navigate = useNavigate();
  const {loadUserData} = useContext(AppContext)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,async (user) => {
      if (user) {
        navigate('/chat');
        await loadUserData(user.uid)
      } else {
        navigate('/');
      }
    });
  }, [])
  return (
    <>
    <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/chat' element={<Chat/>}></Route>
        <Route path='/profile-update' element={<ProfileUpdate/>}></Route>
      </Routes>
    </>
  )
}

export default App
