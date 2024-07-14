import React from 'react'
import Navbar from './component/Navbar'
import Home from './pages/Home'

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Menu from './pages/menu'
import Contact from './pages/contact'

const App = () => {
  return (
   <Router>
    <Navbar/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/menu' element={<Menu/>}/>
       <Route path='/contact' element={<Contact/>} />
     </Routes>
   </Router>
  
  )
}

export default App
