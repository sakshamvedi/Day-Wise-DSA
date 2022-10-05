import React from 'react'
import {Link } from "react-router-dom" 
function Navbar() {
  return (

<div className='navigation'>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"white"}}>
     Dev-Magic
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={"/"}>
            Home
          </Link>
        </li>
        <li  className="nav-link active" className="nav-item">
          <Link className="nav-link" to = {"/code"}>
           Leet/Box
          </Link>
        </li>
        <li  className="nav-item">
          <Link className="nav-link active" className="nav-link" to = {"/box"}>
           Dev-Magic-Box
          </Link>
        </li>
        <li  className="nav-item">
          <Link className="nav-link active" className="nav-link" to = {"/search"}>
          Profiles
          </Link>
        </li>
   
   
      </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

  </div>


    
  /* <ul className="navbar">
      <Link to="/home">
    <li className="list" style={{ listStyleType: "none" }}>
      Home
    </li>
    </Link>
    <Link to = "/code">
    <li className="list" style={{ listStyleType: "none" }}>
      Leet-Code
    </li>
    </Link>

    <Link to = "/box">
    <li className="list" style={{ listStyleType: "none" }}>
      MagicBox
    </li>
    </Link>
    <Link to = "/search">
    <li className="list" style={{ listStyleType: "none" }}>
      Search
    </li>
    </Link>
  </ul>
</div> */

  )
}

export default Navbar