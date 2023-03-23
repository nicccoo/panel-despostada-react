import { Line } from "react-chartjs-2";
import "./graficoPromedioGrasa.css";

const GraficoPromedioGrasa = ({ chartData, chartOptions}) => {
 
  return (
    <div className="foss-charts">
      <Line
       height={180}
        className="prod-total__barchart"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default GraficoPromedioGrasa;
