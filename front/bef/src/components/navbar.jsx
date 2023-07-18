import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom'
import classnames from 'classnames';
import '../styles/navbar.css'
import imgLogo from '../images/port 2 be.jpg';    

const Navbar = () =>{
    const [navbarBg, setNavbarBg] = useState(false);

    const changeNavbarBg = () => {
      if (window.scrollY >= 50) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', changeNavbarBg);
      return () => {
        window.removeEventListener('scroll', changeNavbarBg);
      };
    }, []);

    return(
        <>
        
                <nav id='navbarContainer'  className={classnames('navbar', { 'navbar-bg-color': navbarBg }, 'fixed-top', 'navbar-expand-lg')}>
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light letrasNav" to={"/"}>BE
                            {/* <img src={imgLogo} alt="Bootstrap" width="30" height="24" /> */}
                        </Link>
                        <button className="navbar-toggler  text-bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul id='navbutton' className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link text-light letrasNav" aria-current="page" to={"/"}>HOME</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light letrasNav" to={`/bandas`}>BANDAS</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light letrasNav" to={`/evento`}>SOBRE EL EVENTO</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light letrasNav" to={`/nosotros`}>NOSOTROS</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light letrasNav" to={`/postales`}>POSTALES</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light letrasNav" to={`/tienda`}>TIENDA</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <Outlet />
        </>
    )
}

export default Navbar;


