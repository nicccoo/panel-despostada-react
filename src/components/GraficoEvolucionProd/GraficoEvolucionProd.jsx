import {
  Chart as ChartsJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import "./graficoEvolucionProd.css";

ChartsJS.register(
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);
import { CHART_COLOR_BLUE, CHART_COLOR_GREEN } from "../../utils/CHARTS_COLORS";

const GraficoEvolucionProd = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", 9],
      datasets: [
        {
          label: "Producción real",
          data: [0, 180, 450, 670, 1020, 1450, 1470, 1750, 2001],
          backgroundColor: CHART_COLOR_BLUE,
          borderColor: CHART_COLOR_BLUE,
          tension: 0.1,
          
        },
        {
          label: "Producción programada",
          data: [0, 261, 522, 783, 1044, 1305, 1566, 1827, 2088, 2355],
          backgroundColor: CHART_COLOR_GREEN,
          borderColor: CHART_COLOR_GREEN,
        },
      ],
    });

    setChartOptions({
      responsive: true,
      layout: {
        padding: 16 ,
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'HORA',
            color: 'white',
            size: 15
          },          
          ticks: {
            color: "#e6e9ec",
          },
          grid: {
            color: "#e6e9ec",
          },
        },
        y:{
          title: {
            display: true,
            text: 'CANT. DE CUARTOS',
            color: 'white',
            size: 15
          },
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
          color: 'white',
          anchor: 'start',
          align: 'left',
          font:{
            weight: 'bold',
            size: 15
          }                
        },
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "EVOLUCIÓN DE LA PRODUCCIÓN",
          color: "#e6e9ec",
          font: {
            size: 15
          }            
        },
      },
    });
  }, []);

  return (
    <div className="evol-prod__main">
      <Line
        className="evol-prod__linechart"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default GraficoEvolucionProd;
