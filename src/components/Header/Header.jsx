import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";
import Reloj from "../Reloj/Reloj";
import { format } from "date-fns";

const Header = () => {
  const [fecha, setFecha] = useState(format(new Date(), "dd/MM/yyyy"));  

  useEffect(() => {
    const interval = setInterval(() => {
      setFecha(format(new Date(), "dd/MM/yyyy"));
    }, 60000);
    return () => clearTimeout(interval);
  }, []);
  
  return (
    <div className="header">
      <div className="header-izq">
        <Link to={"/"} exact>
          <img className="header-izq__logo" src={logo} alt="" />
        </Link>
        <div className="header-izq__title">
          <h2 className="header-izq__descripcion">
            <div className="header-izq__fecha">Fecha: {fecha}</div>
            <div className="header-izq__hora">
              Hora: <Reloj />
            </div>
          </h2>
        </div>
      </div>
      <div className="header-center">
      
        <h3 className="header-center__title">SALA DESPOSTADA TURNO MAÑANA</h3>
      </div>
      <div className="header-der">
        <nav className="header-der__navbar">
          <Link to={"/"}>PRODUCCION</Link>
          <Link to={"/rechazos"}>RECHAZOS</Link>
          <Link to={"/rechazos-resumen"}>RESUMEN RECHAZOS</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
