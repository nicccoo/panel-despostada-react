import { Bar } from "react-chartjs-2";
import './GraficoRechazosFOSSVL.css';

const GraficoRechazosFOSSVL80 = ({ chartData, chartOptions }) => {

  return (
    <div className="foss-charts">
      <Bar
        height={180}
        className="rechazos-foss__barchart"
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default GraficoRechazosFOSSVL80;
