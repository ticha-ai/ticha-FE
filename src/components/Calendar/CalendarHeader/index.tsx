import Icon from '@/components/Icon';

import style from './style.module.css';

interface CalendarHeaderProps {
  year: number;
  month: number;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}

const CalendarHeader = ({
  year,
  month,
  handlePrevMonth,
  handleNextMonth,
}: CalendarHeaderProps) => {
  return (
    <div className={style.container}>
      <h3 className={style.title}>나의 학습 달력</h3>
      <div className={style['controller-wrapper']}>
        <button onClick={handlePrevMonth} className={style['arrow-left']}>
          <Icon id='left' size='md' />
        </button>
        <span className={style.date}>
          {year}년 {month + 1}월
        </span>
        <button onClick={handleNextMonth} className={style['arrow-right']}>
          <Icon id='right' size='md' />
        </button>
      </div>
    </div>
  );
};

export default CalendarHeader;
