import axios from "axios";

export const getDataProdProgramada = async () => {
  try {
    const res = await axios.get(
      "http://192.168.10.111:9080/api/dDespostada_Programado/produccion-programada"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDataProdReal = async () => {
  try {
    const res = await axios.get(
      "http://192.168.10.111:9080/api/dDespostada_Ingreso/produccion-real"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getDataRechazos = async () => {
  try {
    const res = await axios.get(
      "http://192.168.10.111:9080/api/dDespostada_Rechazos/rechazos"
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
