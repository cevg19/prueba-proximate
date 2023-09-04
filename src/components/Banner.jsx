import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <header className="d-flex align-items-center ">
        <div className="container px-4 px-lg-5 text-center">
          <div className="pt-md-5 pb-md-4 text-center">
            <h1 className="display-1 mb-1">Bienvenido!</h1>
            <h3 className="display-9 mb-5">Accede a la plataforma</h3>
          </div>
          <Link className="btn btn-primary btn-xl" to="/login">
            Ingresar
          </Link>
        </div>
      </header>
    </>
  );
}

export default Banner;
