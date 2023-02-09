import React from "react";
import "./header.css";
import logo from "../../assets/logo.jpg";
import reloj from "../../assets/ddd.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-izq">
        <Link to={"/"} exact >
          <img className="header-izq__logo" src={logo} alt="" />
        </Link>
        <div className="header-izq__title">
          <h3 className="desc">Fecha: 31/01/2023 - Hora: 10:00 Hs.</h3>
          <h3 className="desc">Presencialidad (%): 95%</h3>
        </div>
      </div>
      <div className="header-center">
        <h3 className="desc">SALA DEPOSTADA TURNO MAÑANA</h3>
        <img src={reloj} alt="reloj" className="header-der__reloj" />
        <p>TIEMPO PARA PROXIMO DESCANSO</p>
      </div>
      <div className="header-der">
        <nav className="header-der__navbar">
        <Link to={"/"}>
            PRODUCCION
          </Link>        
          <Link to={"/rechazos"}>
            RECHAZOS
          </Link>
          <Link to={"/rechazos-resumen"}>
            RESUMEN RECHAZOS
          </Link>
          </nav>
      </div>
    </div>
  );
};

export default Header;
