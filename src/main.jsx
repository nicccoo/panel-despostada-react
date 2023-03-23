import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProduccionProvider } from "./context/produccionContext";
import { DataRechazosProvider } from "./context/dataRechazosContext";
import RechazosProvider from "./context/rechazosContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProduccionProvider>
    <RechazosProvider>
      <DataRechazosProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataRechazosProvider>
    </RechazosProvider>
  </ProduccionProvider>
);
