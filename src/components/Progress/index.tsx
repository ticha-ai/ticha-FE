'use client';

import DoughnutChart from './Doughnut';
import style from './style.module.css';

const Progress = () => {
  // 임시 데이터
  const onGoingLearning = [
    {
      title: 'Quiz 1',
      progress: 68,
      learning_date: '2024-01-01',
    },
    {
      title: 'Quiz 2',
      progress: 85,
      learning_date: '2024-01-02',
    },
  ];

  const progressClass =
    onGoingLearning.length > 0
      ? style['ongoing-container']
      : style['ongoing-none'];

  return (
    <div className={progressClass}>
      {onGoingLearning.length ? (
        <>
          <DoughnutChart
            key={onGoingLearning[0].title}
            title={onGoingLearning[0].title}
            progress={onGoingLearning[0].progress}
            learning_date={onGoingLearning[0].learning_date}
          />
          <hr className={style['break-line']} />
          <DoughnutChart
            key={onGoingLearning[1].title}
            title={onGoingLearning[1].title}
            progress={onGoingLearning[1].progress}
            learning_date={onGoingLearning[1].learning_date}
          />
        </>
      ) : (
        <div>
          <p>진행 중인 학습이 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default Progress;
