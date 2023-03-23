import { createTheme } from "@mui/material/styles";

export const columns = [
  {
    name: "idDCajas",
    label: "Id Caja",
  },
  {
    name: "codError",
    label: "Cod. Error",
  },
  {
    name: "error",
    label: "Error",
  },
  {
    name: "fSistema",
    label: "Fecha - Hora",
  },
  {
    name: "grupoProducto",
    label: "Grupo Producto",
  },
  {
    name: "tipoDestino",
    label: "Tipo Destino",
  },
  {
    name: "kilos",
    label: "Kilos",
  },
  {
    name: "numeroOperario",
    label: "N°. Operario",
  },
];

export const getMuiTheme = () =>
  createTheme({
    components: {
      MUIDataTable: {
        styleOverrides: {
          root: {
            width: "95%",
            margin: "auto",
            overflow: "scroll",
            backgroundColor: "#303A45",
            height: "82vh",
          },
        },
      },
      MUIDataTableBodyCell: {
        styleOverrides: {
          root: {
            fontWeight: "bold",
            width: "150px",
            textAlign: "center",
            textTransform: "uppercase"
          },
        },
      },
      MUIDataTableHeadCell: {
        styleOverrides: {
          root: {
            color: "white",
            textAlign: "center",
          },
        },
      },
    },
  });
