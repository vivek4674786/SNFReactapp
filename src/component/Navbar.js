import React from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

function NavBar() {
  let location = useLocation();
  let navigate = useNavigate();
  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   navigate('/login');
  // }
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">S&F Rajkot</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""}`} aria-current="page" to="/" >Services</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""}`} aria-current="page" to="/about" >About Us</Link>
              </li>
            </ul>
          </div>
          {!localStorage.getItem('token') ? <form className="d-flex">
            <Link className='btn btn-outline-light me-3 btn-dark' to="/login" role="button">Login</Link>
            <Link className='btn btn-outline-dark mx-1 btn-light' to="/signup" role="button">SignUp</Link>
          </form> : <form className="d-flex">
            
            <Link to="/profile" ><img src={require('../Image/user.png')} style={{height: "2.5rem"}}></img></Link>
            {/* <Link className='btn btn-outline-dark mx-1 btn-light' to="/profile" role="button">Profile</Link>*/}</form>
          }
        </div>
      </nav>
    </>
  );
}

export default NavBar;