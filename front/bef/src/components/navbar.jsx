import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import '../styles/navbar.css'
import imgLogo from '../images/port 2 be.jpg';    

const Navbar = () =>{
    return(
        <>
        
                <nav id='navbarContainer' className="navbar fixed-top navbar-expand-lg ">
                    <div className="container-fluid">
                        <Link className="navbar-brand text-light" to={"/"}>
                            <img src={imgLogo} alt="Bootstrap" width="30" height="24" />
                        </Link>
                        <button className="navbar-toggler  text-bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul id='navbutton' className="navbar-nav">
                            <li className="nav-item">
                            <Link className="nav-link text-light" aria-current="page" to={"/"}>HOME</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light" to={`/bandas`}>BANDAS</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light" to={`/evento`}>SOBRE EL EVENTO</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light" to={`/nosotros`}>NOSOTROS</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light" to={`/postales`}>POSTALES</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link text-light" to={`/tienda`}>TIENDA</Link>
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