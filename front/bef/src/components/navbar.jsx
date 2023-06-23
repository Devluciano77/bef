import react from 'react';
import '../styles/navbar.css'
import imgLogo from '../images/port 2 be.jpg';    

function Navbar(){
    return(
        <>
                <nav id='navbarContainer' className="navbar fixed-top navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light" href="">
                            <img src={imgLogo} alt="Bootstrap" width="30" height="24" />
                        </a>
                        <button className="navbar-toggler  text-bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation" >
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                        <ul id='navbutton' className="navbar-nav">
                            <li className="nav-item">
                            <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Bandas</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Contactos</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Postales</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link text-light" href="#">Merch</a>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Ediciones
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="index.html">2023</a></li>
                                <li><a className="dropdown-item" href="#">2022</a></li>
                                <li><a className="dropdown-item" href="#">2019</a></li>
                                <li><a className="dropdown-item" href="#">2018</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
        </>
    )
}

export default Navbar;