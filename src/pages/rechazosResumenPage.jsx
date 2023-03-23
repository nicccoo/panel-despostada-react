import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TableResumenRechazos from "../components/TableResumenRechazos/TableResumenRechazos";

export const RechazosResumenPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      return navigate("/");
    }, 100000);

    return () => clearTimeout(timeout);
  }, []);

  return <TableResumenRechazos />;
};

export default RechazosResumenPage;
