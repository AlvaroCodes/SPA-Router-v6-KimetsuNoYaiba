import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../../style.css'

export const NavBar = () => {
  return (
    <div className='navBar'>
     <h1>AnimeKimetsu</h1>

       <Link
       className='navBar-link'
       to='/'
       >
        Inicio
       </Link>

       <NavLink
        className='navBar-link'
       to='SeasonsOne'
       >
            SeasonsOne
       </NavLink>

       <NavLink
        className='navBar-link'
       to='SeasonsTwo'
       >
            SeasonsTwo
       </NavLink>

       <NavLink
        className='navBar-link'
       to='SeasonsThree'
       >
            SeasonsThree
       </NavLink>
    </div>
  )
}
