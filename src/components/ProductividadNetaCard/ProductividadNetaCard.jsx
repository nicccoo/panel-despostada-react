import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles.css";
import "./card.css";

const ProductividadNetaCard = () => {
  const [productividadNeta, setProductividadNeta] = useState([]);
  const [presentes, setPresentes] = useState([]);

  useEffect(() => {
    const ProductividadNetaData = async () => {
      try {
        const res = await axios.get(
          "http://192.168.10.111:9080/api/dDespostada_Producido/produccion-neta"
        );
        setProductividadNeta(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    ProductividadNetaData();

    return () => {};
  }, []);

  useEffect(() => {
    const getPresentes = async () => {
      try {
        const res = await axios.get(
          "https://localhost:7075/api/dDespostada_Presentes/presentes"
        );
        setPresentes(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getPresentes();

    return () => {};
  }, []);

  console.log(presentes);

  const getKGHH = (kilos, presentes, horasTranscurridas) => {
    const resultado = kilos / (presentes * horasTranscurridas);

    return Math.round(resultado);
  };

  return (
    <>
      {productividadNeta.map((item, index) => (
        <div className="card-container" key={index}>
          <div>
            <h3 className="card-title">PRODUCTIVIDAD NETA [KG/HH]</h3>
          </div>
          <h2 className="card-desc">
            {getKGHH(Number(item.kilos), 227, 8)} KG.
          </h2>
        </div>
      ))}
    </>
  );
  s;
};

export default ProductividadNetaCard;
