import React from 'react';
import Fond from '../images/fond.jpg'
import nosotros from '../images/Nosotros.jpg'
import '../styles/Nosotros.css';
import Footer from "./footer";

const Nosotros = () => {
  const videoId = 'SmpYmb3MOjE';
  return (
    <>
      <div>
        <img src={Fond} className="img-fluid position-fixed" alt="portada"></img>

        <div className="card-img-overlay" >
          <div className="container-fluid">
          <br />
          <br />
              <h1 className="mt-5">HISTORIA</h1>
              <div id='syleCard' className="container card mb-3 bg-transparent text-light">
              <div className="row">
                <div className="col-md-6">
                  <img src={nosotros} className="img-fluid mb-3 ms-md-3" alt="..." />
                </div>
                <div className="col-md-6">
                  <p>
                    A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
                  </p>

                  <p>
                    As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
                  </p>

                  <p>
                    And yet, here you are, still persevering in reading this placeholder text, hoping for some more insights, or some hidden easter egg of content. A joke, perhaps. Unfortunately, there's none of that here.
                  </p>
                </div>
              </div>
              </div>

              <div className='container container-fluid' >
                <div className="ratio ratio-16x9">
                  <iframe
                  className="embed-responsive-item"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  ></iframe>
                </div>
              </div>

          </div>
          <Footer />
        </div>

      </div>

    </>

  );
}

export default Nosotros;