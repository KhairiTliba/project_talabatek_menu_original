import React from 'react'
import logo from "../../images/logo.jpg"
import "./styles.css"

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className='left'>
            <img src={logo} />
            <h1>Logo R</h1>
        </div>
        <div className='right'>
            <h2>Hello</h2>
        </div>
    </div>
  )
}

export default Navbar