import React from "react";
import "./header.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-izq">
        <Link to={"/"} exact>
          <img className="header-izq__logo" src={logo} alt="" />
        </Link>
        <div className="header-izq__title">
          <h3 className="desc">Fecha: 31/01/2023 - Hora: 10:00 Hs.</h3>
          <h3 className="desc">Presencialidad (%): 95%</h3>
        </div>
      </div>
      <div className="header-der">
        <h3 className="desc">SALA DEPOSTADA TURNO MAÑANA</h3>
        <span className="header-der__reloj">00:30</span>
        <p>TIEMPO PARA PROXIMO DESCANSO</p>
      </div>
    </div>
  );
};

export default Header;
