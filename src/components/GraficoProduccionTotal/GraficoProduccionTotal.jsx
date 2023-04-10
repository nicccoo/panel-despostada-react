import {
  Chart as ChartsJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { CHART_COLOR_BLUE, CHART_COLOR_GREEN, CHART_COLOR_WHITE } from "../../utils/CHARTS_COLORS";
import { useProduccion } from "../../context/produccionContext";
import "./GraficoProduccionTotal.css";

ChartsJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const GraficoProduccionTotal = () => {
  const { prodProgramada } = useProduccion();
  const { prodReal } = useProduccion();

  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["Producciones"],
      datasets: [
        {
          label: "Producción Real",
          fontColor: "",
          backgroundColor: CHART_COLOR_BLUE,
          data: prodReal.map((r) => r.unidades),
        },
        {
          label: "Producción Programada",
          color: "#e6e9ec",
          backgroundColor: CHART_COLOR_GREEN,
          data: prodProgramada.map((p) => p.unidades),
        },
      ],
    });

    setChartOptions({
      responsive: true,
      layout: {
        padding: 10,
      },
      indexAxis: "y",
      scales: {
        x: {
          ticks: {
            color: CHART_COLOR_WHITE,
          },
          grid: {
            color: CHART_COLOR_WHITE,
          },
        },
        y: {
          ticks: {
            color: CHART_COLOR_WHITE,
          },
          grid: {
            color: CHART_COLOR_WHITE,
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
          fontColor: CHART_COLOR_WHITE,
        },
        title: {
          display: true,
          text: "PRODUCCIÓN TOTAL",
          color: CHART_COLOR_WHITE,
          font: {
            size: 15,
          },
        },
      },
    });
  }, []);

  return (
    <>
      <Bar
        className="prod-total__barchart"
        data={chartData}
        options={chartOptions}
      />
    </>
  );
};

export default GraficoProduccionTotal;
