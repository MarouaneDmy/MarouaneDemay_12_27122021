import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.svg'

export default function Logo(props) {
    return (
      <h1>
        <Link to="/">
          <img className="logo" src={logo} alt="Kasa" />
        </Link>
      </h1>
    )
}