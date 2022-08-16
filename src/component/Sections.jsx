import React from 'react'
import {Routes,Route} from "react-router-dom";
import Flames from './components/Flames';
import Home from './components/Home';
import ShowDetails from './components/ShowDetails';
function Sections() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/flames' element={<Flames/>}/>
          <Route path='/show' element={<ShowDetails/>} />
        </Routes>
    </div>
  )
}

export default Sections