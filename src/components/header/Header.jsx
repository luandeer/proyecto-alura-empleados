import React from 'react'
import logo from '../../assets/image/Header.png'
import './header.scss'
const Header = () => {
  return (
    <>
      <header>
        <img src={logo} alt="foto de portada" />
      </header>
    </>
  )
}

export default Header