import React from "react";
import {
  Chart as ChartsJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { CHART_COLOR_BLUE, CHART_COLOR_GREEN } from "../utils/CHARTS_COLORS";
import { useState, useEffect, useContext, createContext } from "react";

ChartsJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const dataRechazosFOSSContext = createContext();

export const useDataRechazosFOSS = () => {
  const context = useContext(dataRechazosFOSSContext);
  if (!context) throw new Error("Provider is missing");
  return context;
};

const DataRechazosFOSSProvider = ({ children }) => {
  const [chartDataVL80, setChartDataVL80] = useState({
    labels: ["Rechazos FOSS"],
    datasets: [
      {
        label: "NEGATIVO",
        backgroundColor: CHART_COLOR_GREEN,
        data: [-4],
      },
      {
        label: "POSITIVO",
        color: "#e6e9ec",
        backgroundColor: CHART_COLOR_BLUE,
        data: [9],
      },
    ],
  });

  const [chartOptionsVL80, setChartOptionsVL80] = useState({
    responsive: true,
    layout: {
      padding: 10,
    },
    indexAxis: "x",
    scales: {
      x: {
        ticks: {
          color: "#e6e9ec",
        },
        grid: {
          color: "#e6e9ec",
        },
      },
      y: {
        ticks: {
          color: "#e6e9ec",
        },
        grid: {
          color: "#e6e9ec",
        },
      },
    },
    plugins: {
      datalabels: {
        color: "#000",
        font: {
          weight: "bold",
          size: 18,
        },
      },
      legend: {
        position: "top",
      },
      labels: {
        fontColor: "#e6e9ec",
      },
      title: {
        display: true,
        text: "RECHAZOS FOSS (VL 80)",
        color: "#e6e9ec",
        font: {
          size: 15,
        },
      },
    },
  });

  const [chartDataVL70, setChartDataVL70] = useState({
    labels: ["Rechazos FOSS"],
    datasets: [
      {
        label: "NEGATIVO",
        backgroundColor: CHART_COLOR_GREEN,
        data: [-3],
      },
      {
        label: "POSITIVO",
        color: "#e6e9ec",
        backgroundColor: CHART_COLOR_BLUE,
        data: [7],
      },
    ],
  });

  const [chartOptionsVL70, setChartOptionsV70] = useState({
    responsive: true,
    layout: {
      padding: 10,
    },
    indexAxis: "x",
    scales: {
      x: {
        ticks: {
          color: "#e6e9ec",
        },
        grid: {
          color: "#e6e9ec",
        },
      },
      y: {
        ticks: {
          color: "#e6e9ec",
        },
        grid: {
          color: "#e6e9ec",
        },
      },
    },
    plugins: {
      datalabels: {
        color: "#000",
        font: {
          weight: "bold",
          size: 18,
        },
      },
      legend: {
        position: "top",
      },
      labels: {
        fontColor: "#e6e9ec",
      },
      title: {
        display: true,
        text: "RECHAZOS FOSS (VL 70)",
        color: "#e6e9ec",
        font: {
          size: 15,
        },
      },
    },
  });

  const [chartDataVL60, setChartDataVL60] = useState({
    labels: ["Rechazos FOSS"],
    datasets: [
      {
        label: "NEGATIVO",
        backgroundColor: CHART_COLOR_GREEN,
        data: [-1],
      },
      {
        label: "POSITIVO",
        color: "#e6e9ec",
        backgroundColor: CHART_COLOR_BLUE,
        data: [4],
      },
    ],
  });

  const [chartOptionsVL60, setChartOptionsV60] = useState({
    responsive: true,
    layout: {
      padding: 10,
    },
    indexAxis: "x",
    scales: {
      x: {
        ticks: {
          color: "#e6e9ec",
        },
        grid: {
          color: "#e6e9ec",
        },
      },
      y: {
        ticks: {
          color: "#e6e9ec",
        },
        grid: {
          color: "#e6e9ec",
        },
      },
    },
    plugins: {
      datalabels: {
        color: "#000",
        font: {
          weight: "bold",
          size: 18,
        },
      },
      legend: {
        position: "top",
      },
      labels: {
        fontColor: "#e6e9ec",
      },
      title: {
        display: true,
        text: "RECHAZOS FOSS (VL 60)",
        color: "#e6e9ec",
        font: {
          size: 15,
        },
      },
    },
  });

  return (
    <dataRechazosFOSSContext.Provider
      value={{
        chartDataVL80,
        chartOptionsVL80,
        chartDataVL70,
        chartOptionsVL70,
        chartDataVL60,
        chartOptionsVL60,
      }}
    >
      {children}
    </dataRechazosFOSSContext.Provider>
  );
};

export default DataRechazosFOSSProvider;
