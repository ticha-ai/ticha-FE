import style from './style.module.css';

interface DatesProps {
  dateObj: {
    date: number;
    currentMonth: boolean;
  };
}

const Dates = ({ dateObj }: DatesProps) => {
  const dateClass = dateObj.currentMonth
    ? style.date
    : style['non-current-month'];
  return <div className={dateClass}>{dateObj.date}</div>;
};

export default Dates;
