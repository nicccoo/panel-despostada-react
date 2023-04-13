import { useState, useEffect, useContext, createContext } from "react";
import { getDataProdProgramada, getDataProdReal } from "../api/request";

const produccionContext = createContext();

export const useProduccion = () => {
  const context = useContext(produccionContext);
  if (!context) throw new Error("Provider is missing");
  return context;
};

export const ProduccionProvider = ({ children }) => {
  const [prodProgramada, setProdProgramada] = useState([]);
  const [prodReal, setProdReal] = useState([]);  

  useEffect(() => {
    const getDataProg = async () => {
      const res = await getDataProdProgramada();
      setProdProgramada(res);
    };

    const timer = setTimeout(() => {
      getDataProg();
    }, 100000);

    getDataProg();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getDataReal = async () => {
      const res = await getDataProdReal();
      setProdReal(res);
    };

    const timer = setTimeout(() => {
      getDataReal();
    }, 100000);

    getDataReal();
    return () => clearTimeout(timer);
  }, []);
  

  return (
    <produccionContext.Provider value={{ prodProgramada, prodReal }}>
      {children}
    </produccionContext.Provider>
  );
};

export default ProduccionProvider;
