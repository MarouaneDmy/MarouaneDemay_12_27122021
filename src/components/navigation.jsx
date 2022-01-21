import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation(props) {
    return (
      <nav className='navigation'>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/profile/12">Profil</NavLink>
          </li>
          <li>
            <NavLink to="/settings">Réglage</NavLink>
          </li>
          <li>
            <NavLink to="/community">Communauté</NavLink>
          </li>
        </ul>
      </nav>
    )
}