import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Seasons_one } from '../components/seasons_one/Seasons_one';
import { Seasons_three } from '../components/seasons_three/Seasons_three';
import { Seasons_two } from '../components/seasons_two/Seasons_two';
import { NavBar } from '../components/ui/NavBar';


export const RouterApp = () => {
  return (
    <BrowserRouter>
    <NavBar/>

    <Routes>
        <Route path='/' element={<Seasons_one/>}/>
        <Route path='/SeasonsOne' element={<Seasons_one/>}/>
        <Route path='/SeasonsThree' element={<Seasons_three/>}/>
        <Route path='/SeasonsTwo' element={<Seasons_two/>}/>
    </Routes>


    </BrowserRouter>
  )
}
