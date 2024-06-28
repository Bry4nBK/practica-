import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import MiApi from "./components/MiApi";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container flex-grow-1">
        <h1 className="title text-center my-4">Calendario de Feriados</h1>
        <MiApi />
      </div>
      <footer className="footer mt-5 py-3 bg-dark text-white text-center">
        <div className="container">
          <p>Estas son mis redes sociales:</p>
          <div className="d-flex justify-content-center mb-3">
            <a href="https://facebook.com" className="text-white me-3" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" className="text-white me-3" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" className="text-white" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
