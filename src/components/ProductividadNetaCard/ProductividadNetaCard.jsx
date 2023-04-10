import axios from "axios";
import React, { useEffect, useState } from "react";
import "../../styles.css";
import "./card.css";

const ProductividadNetaCard = () => {
  const [productividadNeta, setProductividadNeta] = useState([]);

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

  const getKGHH = (kilos, presentes, horasTranscurridas) => {
    const resultado = kilos / (presentes * horasTranscurridas);

    return Number(Math.round(resultado));
  };

  return (
    <>
      {productividadNeta.map((item, index) => (
        <div className="card-container" key={index}>
          <div>
            <h3 className="card-title">PRODUCTIVIDAD NETA [KG/HH]</h3>
          </div>
          <h2 className="card-desc">{getKGHH(item.kilos, 200, 9.5)} KG.</h2>
        </div>
      ))}
    </>
  );
};

export default ProductividadNetaCard;
