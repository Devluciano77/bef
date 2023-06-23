import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <>
        <div className=''>

        <footer className="text-center text-white" >
            <div className="container p-4">
            <section className="mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <div className="">
                    <p><i className="fas fa-home me-3"></i>Misiones - Argentina</p>
                    <p>
                        <i className="fas fa-envelope me-3"></i>
                        bienextremo@gmail.com
                    </p>
                    <p><i className="fa-brands fa-whatsapp"></i> +54 3751 15-56-9376</p>
                    <p><i className="fa-brands fa-whatsapp"></i> +54 3751 15-56-9376</p>
                </div>
                <a
                    className="btn btn-link btn-floating btn-lg text-light m-1"
                    href="https://www.facebook.com/bienextremo"
                    role="button"
                    data-mdb-ripple-color="dark"
                    target='_blank'
                    ><i className="fa-brands fa-facebook"></i>
                </a>
                <a
                    className="btn btn-link btn-floating btn-lg text-light m-1"
                    href="https://www.youtube.com/@bienextremofest"
                    role="button"
                    data-mdb-ripple-color="dark"
                    target='_blank'
                    ><i className="fa-brands fa-youtube"></i>
                </a>
                <a
                    className="btn btn-link btn-floating btn-lg text-light m-1"
                    href="https://www.instagram.com/bienextremo/"
                    role="button"
                    data-mdb-ripple-color="dark"
                    target='_blank'
                    ><i className="fa-brands fa-instagram"></i>
                </a>
            </section>
            </div>

            <div className="text-center p-3">
                © 2023 Copyright: Bien Extremo Fest
            </div>
            </footer>
        </div>
    </>
  );
}

export default Footer;