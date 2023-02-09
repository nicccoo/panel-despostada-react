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
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { CHART_COLOR_BLUE, CHART_COLOR_GREEN } from "../../utils/CHARTS_COLORS";
import "./graficoRechazosFOSS.css";

ChartsJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const GraficoRechazosFOSS = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Rechazos FOSS"],
      datasets: [
        {
          label: "CONFIRMADO",          
          backgroundColor: CHART_COLOR_GREEN,
          data: [-2, -4],
        },
        {
          label: "NO CONFIRMADO",
          color: "#e6e9ec",
          backgroundColor: CHART_COLOR_BLUE,

          data: [3, 4],
        },
      ],
    });

    setChartOptions({
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
          color: "#BLACK",
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
  }, []);

  return (
    <div className="foss-charts">
      <Bar
        className="rechazos-foss__barchart"
        data={chartData}
        options={chartOptions}
      />      
    </div>
  );
};

export default GraficoRechazosFOSS;
