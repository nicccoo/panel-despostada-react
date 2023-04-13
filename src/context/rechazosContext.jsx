import { useState, useEffect, useContext, createContext } from "react";
import { getDataRechazos } from "../api/request";

const rechazosContext = createContext();

export const useRechazos = () => {
  const context = useContext(rechazosContext);
  if (!context) throw new Error("Provider is missing");
  return context;
};

export const RechazosProvider = ({ children }) => {
  const [rechazos, setRechazos] = useState();

  useEffect(() => {
    const getRechazos = async () => {
      const res = await getDataRechazos();
      setRechazos(res);
    };

    getRechazos();
    return () => {};
  }, []);

  return (
    <rechazosContext.Provider value={{ rechazos }}>
      {children}
    </rechazosContext.Provider>
  );
};

export default RechazosProvider;
