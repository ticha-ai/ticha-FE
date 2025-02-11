import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import style from './style.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
  title: string;
  progress: number;
  learning_date: string;
}

const DoughnutChart = ({
  title,
  progress,
  learning_date,
}: DoughnutChartProps) => {
  const needToLearn = 100 - progress;

  const data = {
    datasets: [
      {
        data: [progress, needToLearn],
        backgroundColor: ['#5562ED', '#F0F2F5'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>{title}</h1>
        <div className={style.progress}>
          <p className={style['progress-text']}>진행률</p>
          <p className={style['progress-number']}>{progress}%</p>
        </div>
        <div className={style.date}>
          <p className={style['date-text']}>학습일</p>
          <p className={style['date-number']}>{learning_date}</p>
        </div>
      </div>
      <div className={style.doughnut}>
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default DoughnutChart;
