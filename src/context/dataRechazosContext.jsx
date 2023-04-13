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

import { useState, useContext, createContext } from "react";
import { CHART_COLOR_WHITE } from "../utils/CHARTS_COLORS";
import Annotation from "chartjs-plugin-annotation";

ChartsJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Annotation
);

const dataRechazosContext = createContext();

export const useDataRechazos = () => {
  const context = useContext(dataRechazosContext);
  if (!context) throw new Error("Provider is missing");
  return context;
};

export const DataRechazosProvider = ({ children }) => {
  const [prueba, setPrueba] = useState(9);

  const [chartData7030, setChartData7030] = useState({
    labels: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
    datasets: [
      {
        label: "% GRASA",
        fontColor: "",
        backgroundColor: "rgba(255, 99, 132)",
        data: [],
      },
    ],
  });

  const [chartOptions7030, setChartOptions7030] = useState({
    responsive: true,
    layout: {
      padding: 20,
    },
    indexAxis: "x",
    scales: {
      x: {
        ticks: {
          color: CHART_COLOR_WHITE,
          beginAtZero: true,
          lineAtIndex: 30,
        },
        grid: {
          color: CHART_COLOR_WHITE,
        },
      },
      y: {
        ticks: {
          color: CHART_COLOR_WHITE,
          display: false,
        },
        grid: {
          color: CHART_COLOR_WHITE,
          display: false,
        },
      },
    },
    plugins: {
      annotation: {
        annotations: {
          box1: {
            type: "box",
            xMin: prueba,
            xMax: prueba + 0.15,
            yMin: 0,
            yMax: 100,
            backgroundColor: "rgba(255, 99, 132)",
          },
        },
      },
      datalabels: {
        display: false,
      },
      legend: {
        position: "top",
      },

      labels: {
        fontColor: CHART_COLOR_WHITE,
      },
      title: {
        display: true,
        text: "CONSUMO: DEL. 70/30",
        color: CHART_COLOR_WHITE,
        font: {
          size: 15,
        },
      },
    },
  });

  const [chartData8020, setChartData8020] = useState({
    labels: [15, 16, 17, 18, 19, 20, 21, 22],
    datasets: [
      {
        label: "% GRASA",
        fontColor: "",
        backgroundColor: "rgba(255, 99, 132)",
        data: [],
      },
    ],
  });

  const [chartOptions8020, setChartOptions8020] = useState({
    responsive: true,
    layout: {
      padding: 20,
    },
    indexAxis: "x",
    scales: {
      x: {
        ticks: {
          color: CHART_COLOR_WHITE,
          beginAtZero: true,
        },
        grid: {
          color: CHART_COLOR_WHITE,
        },
      },
      y: {
        ticks: {
          color: CHART_COLOR_WHITE,
          display: false,
        },
        grid: {
          color: CHART_COLOR_WHITE,
          display: false,
        },
      },
    },
    plugins: {
      annotation: {
        annotations: {
          box1: {
            // Indicates the type of annotation
            type: "box",
            xMin: 3.4,
            xMax: 3.5,
            yMin: 0,
            yMax: 100,
            backgroundColor: "rgba(255, 99, 132)",
          },
        },
      },
      datalabels: {
        display: false,
      },
      legend: {
        position: "top",
      },

      labels: {
        fontColor: CHART_COLOR_WHITE,
      },
      title: {
        display: true,
        text: "CONSUMO: DEL. 80/20",
        color: CHART_COLOR_WHITE,
        font: {
          size: 15,
        },
      },
    },
  });

  const [chartData6040, setChartData6040] = useState({
    labels: [32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42],
    datasets: [
      {
        label: "% GRASA",
        fontColor: "",
        backgroundColor: "rgba(255, 99, 132)",
        data: [],
      },
    ],
  });

  const [chartOptions6040, setChartOptions6040] = useState({
    responsive: true,
    layout: {
      padding: 20,
    },
    indexAxis: "x",
    scales: {
      x: {
        ticks: {
          color: CHART_COLOR_WHITE,
          beginAtZero: true,
        },
        grid: {
          color: CHART_COLOR_WHITE,
        },
      },
      y: {
        ticks: {
          color: CHART_COLOR_WHITE,
          display: false,
        },
        grid: {
          color: CHART_COLOR_WHITE,
          display: false,
        },
      },
    },
    plugins: {
      annotation: {
        annotations: {
          box1: {
            // Indicates the type of annotation
            type: "box",
            xMin: 4.6,
            xMax: 4.75,
            yMin: 0,
            yMax: 100,
            backgroundColor: "rgba(255, 99, 132)",
          },
        },
      },
      datalabels: {
        display: false,
      },
      legend: {
        position: "top",
      },

      labels: {
        fontColor: CHART_COLOR_WHITE,
      },
      title: {
        display: true,
        text: "CONSUMO: DEL. 60/40",
        color: CHART_COLOR_WHITE,
        font: {
          size: 15,
        },
      },
    },
  });

  return (
    <dataRechazosContext.Provider
      value={{
        chartData8020,
        chartOptions8020,
        chartData7030,
        chartOptions7030,
        chartData6040,
        chartOptions6040,
      }}
    >
      {children}
    </dataRechazosContext.Provider>
  );
};

export default dataRechazosContext;
