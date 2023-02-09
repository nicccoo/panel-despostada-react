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
  import './graficoPromedioGrasa.css'
  
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
              data: [-7,-10, 0, 10]
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
                color: "#e6e9ec",
                beginAtZero: true,
                display: false
              },
              grid: {
                color: "#e6e9ec",
              },
            },
            y: {
              ticks: {
                color: "#e6e9ec",
                beginAtZero: true
              },
              grid: {
                color: "#e6e9ec",
              },
            },            
          },
          plugins: {   
            datalabels: {
                display: false
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
        </div>
      );
}

export default GraficoPromedioGrasa