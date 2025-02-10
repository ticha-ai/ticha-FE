import style from './style.module.css';

const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const Days = () => {
  return (
    <div className={style.container}>
      {weekDays.map((day, idx) => (
        <p className={style.days} key={idx}>
          {day}
        </p>
      ))}
    </div>
  );
};

export default Days;
