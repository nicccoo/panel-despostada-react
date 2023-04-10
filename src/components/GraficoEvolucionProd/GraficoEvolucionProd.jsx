import { useState, useEffect } from "react";
import { useProduccion } from "../../context/produccionContext";
import { CHART_COLOR_BLUE, CHART_COLOR_GREEN, CHART_COLOR_WHITE } from "../../utils/CHARTS_COLORS";
import { Line } from "react-chartjs-2";
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

export const GraficoEvolucionProd = () => {
  const { prodProgramada, prodReal } = useProduccion();

  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState([]);

  let prodProgramadaDividida = [];

  useEffect(() => {
    produccionDividida(prodProgramada);
  }, []);

  const produccionDividida = (produccion) => {
    produccion.map((p) => {
      let numDividido = 0;
      numDividido = p.unidades / 9;

      for (let i = 0; i < 10; i++) {
        if (i == 0) {
          prodProgramadaDividida.push(Number(0));
        } else {
          prodProgramadaDividida.push(Number(numDividido) + Number(prodProgramadaDividida[i - 1]));
        }
      }
    });
    return prodProgramadaDividida;
  };

  useEffect(() => {
    setChartData({
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      datasets: [
        {
          label: "Producción real",
          backgroundColor: CHART_COLOR_BLUE,
          borderColor: CHART_COLOR_BLUE,
          data: prodReal.map((p) => p.unidades),
        },
        {
          label: "Producción programada",
          backgroundColor: CHART_COLOR_GREEN,
          borderColor: CHART_COLOR_GREEN,
          data: prodProgramadaDividida.map((p) => Math.round(p)),
        },
      ],
    });

    setChartOptions({
      responsive: true,
      layout: {
        padding: 16,
      },
      scales: {
        x: {
          title: {
            display: true,

            text: "HORA",
            color: CHART_COLOR_WHITE,
          },
          ticks: {
            color: CHART_COLOR_WHITE,
          },
          grid: {
            color: CHART_COLOR_WHITE,
          },
        },
        y: {
          title: {
            display: true,
            text: "CANT. DE CUARTOS",
            color: CHART_COLOR_WHITE,
            size: 15,
          },
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
          color: CHART_COLOR_WHITE,
          anchor: "start",
          align: "left",
          font: {
            weight: "bold",
            size: 15,
          },
        },
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "EVOLUCIÓN DE LA PRODUCCIÓN",
          color: CHART_COLOR_WHITE,
          font: {
            size: 15,
          },
        },
      },
    });
  }, []);

  return (
    <div className="evol-prod__main">
      <Line
        className="evol-prod__linechart"
        redraw={true}
        data={chartData}
        options={chartOptions}
      />
    </div>
    //
  );
};

export default GraficoEvolucionProd;
