import style from './style.module.css';

const DashboardPage = () => {
  return (
    <div>
      <div className={style['greeting-container']}>
        <p>닉네임 님, 안녕하세요!</p>
        <p>오늘도 뭐 힘내고 이런 말이 들어가면 좋을 것 같아요</p>
      </div>
      <div className={style['dashboard-container']}>
        <div className={style['dashboard-header']}>
          <span className={style['dashboard-title']}>학습 대시보드</span>
          <span className={style['dashboard-more']}>더보기</span>
        </div>
        <div className={style['calendar-working-container']}>
          <div className={style['calendar-container']}>
            <p className={style['calendar-title']}>나의 학습 달력</p>
          </div>
          <div className={style['working-status-container']}>
            <p className={style['working-status-title']}>진행 중인 학습</p>
          </div>
        </div>
        <div className={style['learning-status-container']}>
          <p className={style['learning-status-title']}>학습 풀이 현황</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
