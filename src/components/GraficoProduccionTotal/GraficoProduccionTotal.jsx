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
  import { CHART_COLOR_BLUE, CHART_COLOR_GREEN } from '../../utils/CHARTS_COLORS'
  import './GraficoProduccionTotal.css';

ChartsJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const GraficoProduccionTotal = () => {

    const [chartData, setChartData] = useState({
        datasets: [],
      });
    
      const [chartOptions, setChartOptions] = useState({});
    
      useEffect(() => {
        setChartData({
          labels: ['Producciones'],
          datasets: [{
               label: "Producción Real",
               fontColor: "",
               backgroundColor: CHART_COLOR_BLUE,
               data: [1910],
          }, {
               label: "Producción Programada",
               color: "#e6e9ec",
               backgroundColor: CHART_COLOR_GREEN,
               data: [2355],        
          }]
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
              },
              grid: {               
                  color: "#e6e9ec",              
              },
            },         
            y: {
              ticks: {
                color: "#e6e9ec",                
              }    ,
              grid: {               
                color: "#e6e9ec",              
            }
            },
            beginAtZero: true,
          },
          plugins: {
            legend: {              
              position: "top",
            },
            labels: {
              fontColor: "#e6e9ec"
            },
            title: {
              display: true,
              text: "PRODUCCIÓN TOTAL",
              color: "#e6e9ec",
              font: {
                size: 15
              }            
            },
          },
        });
      }, []);

      return ( 
        <div className="aside-charts">
            <Bar className="prod-total__barchart" data={chartData} options={chartOptions} />
        </div>
      )

}

export default GraficoProduccionTotal