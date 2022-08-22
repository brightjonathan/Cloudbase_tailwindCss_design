import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Component/NavBar';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Support from './Pages/Support';
import Platform from './Pages/Platform';
import Pricing from './Pages/Pricing';

const App = () => {
  return (
    <Router>
        <NavBar />
      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route path='/about' element={ <About />} />
        <Route path='/support' element={ <Support /> } />
        <Route path='/platforms' element={ <Platform /> } />
        <Route path='/pricing' element={ <Pricing /> } />
      </Routes>
    </Router> 
  )
}

export default App

