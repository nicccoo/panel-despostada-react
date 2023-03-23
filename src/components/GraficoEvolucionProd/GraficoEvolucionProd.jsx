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
import { Chart, Line } from "react-chartjs-2";
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
import axios from "axios";
import { useProduccion } from "../../context/produccionContext";

export const GraficoEvolucionProd = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const { prodProgramada } = useProduccion();

  const [chartOptions, setChartOptions] = useState([]);
  const [totalData, setTotalData] = useState([]);

  const dividir = async () => {
    let total = [];
    await prodProgramada.map((p) => {
      let numDividido;
      numDividido = p.unidades / 9;

      for (let i = 0; i < 10; i++) {
        if (i == 0) {
          total.push(Number(0));
        } else {
          total.push(Number(numDividido) + Number(total[i - 1]));
        }
      }
      console.log(total);
      setTotalData(total);
    });
  };

  useEffect(() => {
    dividir();
  }, []);

  useEffect(() => {
    setChartData({
      labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      datasets: [
        {
          label: "Producción real",
          backgroundColor: CHART_COLOR_BLUE,
          borderColor: CHART_COLOR_BLUE,
          tension: 0.1,
          data: [0, 180, 450, 670, 1020, 1450, 1470, 1750, 2001],
        },

        {
          label: "Producción programada",
          backgroundColor: CHART_COLOR_GREEN,
          borderColor: CHART_COLOR_GREEN,
          //data: totalData.map((p) => Math.round(p)),
          data: [0, 400, 800, 1000, 1200, 1450, 1620, 1750, 2050],
        },
      ],
      lineAtIndex: [2.4]
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
            color: "white",
            size: 15,
          },
          ticks: {
            color: "#e6e9ec",
          },
          grid: {
            color: "#e6e9ec",
          },
        },
        y: {
          title: {
            display: true,
            text: "CANT. DE CUARTOS",
            color: "white",
            size: 15,
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
          color: "white",
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
          color: "#e6e9ec",
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
