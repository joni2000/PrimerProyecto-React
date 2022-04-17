import React from 'react'
import logo from '../assets/img/logo-DH.png'

const Footer = () => {
  return (
    <footer  className="pie">
    <nav id="logo">
        <a href="#"><img src={logo} alt="Logo Digital House"/></a>
    </nav>
    <nav id="opciones">
        <ul>
            <li><a href="/hola">facebook</a></li>
            <li><a href="/hola">Instagram</a></li>
        </ul>
    </nav>
</footer>

  )
}

export default Footer