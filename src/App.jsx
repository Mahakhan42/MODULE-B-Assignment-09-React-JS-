import React from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Components/Pages/Home'
import { Signup } from './Components/Pages/Signup'
import { Login } from './Components/Pages/Login'
import { Footer } from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
