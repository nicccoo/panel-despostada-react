import { format } from "date-fns";
import React from "react";
import { useEffect, useRef } from "react";

export const Reloj = () => {

  const h4 = useRef();
  const ti = () => {
    const fechahora = new Date();
    let hora = fechahora.getHours().toString();
    let minutos = fechahora.getMinutes().toString();
    let segundos = fechahora.getSeconds().toString();

    if (hora < 10) {
      hora = "0" + hora;
    }
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    if (segundos < 10) {
      segundos = "0" + segundos;
    }
    
    return `${hora}:${minutos}:${segundos}`;
};

  useEffect(() => {
    const cl = setInterval(() => {
      h4.current.innerHTML = `${ti()}`;
    }, 1000);
    return () => clearInterval(cl);
  }, []);
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
      <h4 ref={h4}>{ti()}</h4>
    </div>
  );
};

export default Reloj;
