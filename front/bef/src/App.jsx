import React from 'react';
import { Routes, Route } from 'react-router-dom'
import './App.css'
import  Navbar  from './components/navbar'

import  Portada from './components/portada'
import BandasCard from './components/bandasCard'
import Evento from './components/Evento';
import Nosotros from './components/Nosotros';
import Postales from './components/Postales';
import Tienda from './components/Tienda';


import Footer from './components/footer'

const App = () => {

  return (
    <>
      <div id='root'>
      
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path='/' element={<Portada />}></Route>
            <Route path='/bandas' element={<BandasCard />}></Route>
            <Route path='/evento' element={<Evento />}></Route>
            <Route path='/nosotros' element={<Nosotros />}></Route>
            <Route path='/postales' element={<Postales />}></Route>
            <Route path='/tienda' element={<Tienda />}></Route>
          </Route>
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App;
