import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { getMuiTheme, columns } from "./getMuiTheme";
import { getDataRechazos } from "../../api/request";
import { format } from "date-fns";
import MUIDataTable from "mui-datatables";
import axios from "axios";
import "./tableResumenRechazos.css";

const TableResumenRechazos = () => {
  const [rechazos, setRechazos] = useState([]);

  useEffect(() => {
    const getDataRechazos = async () => {
      try {
        const res = await axios.get(
          "http://192.168.10.111:9080/api/dDespostada_Rechazos/rechazos"
        );
        setRechazos(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDataRechazos();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getDataRechazos();
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ThemeProvider theme={getMuiTheme()}>
      <MUIDataTable
        title={"RECHAZOS"}
        data={rechazos.map((r) => {
          return [
            r.idDCajas,
            r.codError,
            r.error,
            format(new Date(r.fSistema), "dd/MM hh:mm"),
            r.grupoProducto,
            r.tipoDestino,
            `${r.kilos} KG.`,
            r.numeroOperario,
          ];
        })}
        columns={columns}
      />
    </ThemeProvider>
  );
};

export default TableResumenRechazos;
