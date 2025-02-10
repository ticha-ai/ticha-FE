export const getCalendarDays = (year: number, month: number) => {
  // 현재 달의 첫 날의 요일 (0: 일요일, 1: 월요일, ...)
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  // 현재 달의 마지막 날짜
  const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
  // 이전 달의 마지막 날짜
  const lastDateOfPrevMonth = new Date(year, month, 0).getDate();

  // 달력에 들어갈 날짜 데이터를 생성
  const calendarDays = [];

  // 만약 현재 달의 첫 날이 일요일이 아니라면, 이전 달의 날짜를 채워 넣음 (연한 색으로)
  for (let i = firstDayOfMonth; i > 0; i--) {
    calendarDays.push({
      date: lastDateOfPrevMonth - i + 1,
      currentMonth: false,
    });
  }

  // 현재 달의 날짜들
  for (let i = 1; i <= lastDateOfMonth; i++) {
    calendarDays.push({
      date: i,
      currentMonth: true,
    });
  }

  // 달력 그리드를 맞추기 위해 다음 달의 날짜들 추가 (필요하면)
  const remainder = calendarDays.length % 7;
  const nextDaysCount = remainder === 0 ? 0 : 7 - remainder;
  for (let i = 1; i <= nextDaysCount; i++) {
    calendarDays.push({
      date: i,
      currentMonth: false,
    });
  }

  // 7일 단위로 주(week) 단위 배열로 묶음
  const weeks = [];
  for (let i = 0; i < calendarDays.length; i += 7) {
    weeks.push(calendarDays.slice(i, i + 7));
  }

  return weeks;
};
