import React from 'react'
import image from '../assets/nav.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
      <img src={image} alt="Logo" width="90" height="50" className="d-inline-block align-text-center mx-3 " />
        Paratha Store</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mx-last" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/menu"} className="nav-link active" aria-current="page" href="#">Menu</Link>
          </li>
          <li className="nav-item">
            <Link to={"/contact"} className="nav-link active" aria-current="page" href="#">Contact</Link>
          </li>
          <li className="nav-item " id='center'>
          <i className="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
