import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/nav/Navbar'
import About from './Pages/About'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Classes from './Pages/Classes'
import Blog from './Pages/Blog'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="classes" element={<Classes/>} />
        <Route path="blog" element={<Blog/>} />
      </Routes>
    </>
  )
}

export default App
