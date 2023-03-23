import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import ProduccionPage from "./pages/produccionPage";
import RechazosPage from "./pages/rechazosPage";
import RechazosResumenPage from "./pages/rechazosResumenPage";
import "./styles.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route exact path="/" element={<ProduccionPage />} />
        <Route exact path="/rechazos" element={<RechazosPage />} />
        <Route
          exact
          path="/rechazos-resumen"
          element={<RechazosResumenPage />}
        />
        <Route path="*" element={<h1>error</h1>} />
      </Routes>
    </div>
  );
}

export default App;
