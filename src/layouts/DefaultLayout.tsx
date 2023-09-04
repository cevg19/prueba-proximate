import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../layouts/DefaultLayout.css";
import { useAuth } from "../auth/AuthProvider";
import Footer from "../components/Footer";

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const logout = () => {
  localStorage.clear();
};
  
 
function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <div id="viewport">
        <div id="sidebar">
          <header>
            <a href="#">Proximate PruebaTec</a>
          </header>
          <div className="nav list-group list-group-flush">
            <Link
              className="list-group-item list-group-item-action list-group-item-light "
              to="/"
            >
              Inicio
            </Link>

            {localStorage.getItem("user-info") ? (
              <>
                <Link
                  className="list-group-item list-group-item-action list-group-item-light "
                  to="/dashboard"
                >
                  Productos
                </Link>
                <Link
                  onClick={logout}
                  className="list-group-item list-group-item-action list-group-item-light text-warning"
                  to="/"
                >
                  Cerrar Sesion
                </Link>
              </>
            ) : (
              <Link
                className="list-group-item list-group-item-action list-group-item-light  text-warning"
                to="/login"
              >
                Ingresa
              </Link>
            )}
          </div>
        </div>

        <div id="content">
          <div className="container-fluid">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;
