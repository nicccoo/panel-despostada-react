import { useState, useEffect } from "react";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { CHART_COLOR_BLUE } from "../../utils/CHARTS_COLORS";
import {
  Chart as ChartsJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./graficoPromedioGrasa.css";

ChartsJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const GraficoPromedioGrasa = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [20],
      datasets: [
        {
          label: "% GRASA",
          fontColor: "",
          backgroundColor: CHART_COLOR_BLUE,
          data: [-0.7, 11],
        },
      ],
    });

    setChartOptions({
      responsive: true,
      layout: {
        padding: 25,
      },
      indexAxis: "y",
      scales: {
        x: {
          ticks: {
            color: "#e6e9ec",
            beginAtZero: true,
            display: false,
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
          display: false,
        },
        legend: {
          position: "top",
        },

        labels: {
          fontColor: "#e6e9ec",
        },
        title: {
          display: true,
          text: "PROMEDIO DE GRASA POR RANGO",
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
        className="prod-total__barchart"
        data={chartData}
        options={chartOptions}
      />
      <span
        style={{
          fontSize: 11.3,
          color: "white",
          marginTop: "108px",
          position: "absolute",
          marginRight: "-328px",
          fontFamily: "Verdana",
        }}
      >
        30
      </span>
    </div>
  );
};

export default GraficoPromedioGrasa;
