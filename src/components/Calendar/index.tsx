'use client';

import { useState } from 'react';

import { getCalendarDays } from '@/utils/dateUtils';

import CalendarHeader from './CalendarHeader';
import Dates from './Dates';
import Days from './Days';
import style from './style.module.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0부터 시작하는 월

  // 이전 달로 이동
  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // 7일 단위로 주(week) 단위 배열로 묶음
  const weeks = getCalendarDays(year, month);

  return (
    <div className={style.container}>
      <CalendarHeader
        year={year}
        month={month}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />

      <div>
        <Days />

        {weeks.map((week, wIdx) => (
          <div key={wIdx} className={style['weeks-wrapper']}>
            {week.map((dayObj, dIdx) => (
              <Dates key={`${wIdx}-${dIdx}`} dateObj={dayObj} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
