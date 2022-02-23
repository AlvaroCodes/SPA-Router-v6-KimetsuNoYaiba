import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../style.css'

export const NavBar = () => {
  return (
    <div className='navBar'>
     <h1>AnimeKimetsu</h1>

       <NavLink
       className= { ({isActive})=> 'navBar-link' + (isActive?' active':'')}
       to='/'
       >
        Inicio
       </NavLink>

       <NavLink
         className= { ({isActive})=> 'navBar-link' + (isActive?' active':'')}
       to='SeasonsOne'
       >
            SeasonsOne
       </NavLink>

       <NavLink
         className= { ({isActive})=> 'navBar-link' + (isActive?' active':'')}
       to='SeasonsTwo'
       >
            SeasonsTwo
       </NavLink>

       <NavLink
         className= { ({isActive})=> 'navBar-link' + (isActive?' active':'')}
       to='SeasonsThree'
       >
            SeasonsThree
       </NavLink>
    </div>
  )
}
