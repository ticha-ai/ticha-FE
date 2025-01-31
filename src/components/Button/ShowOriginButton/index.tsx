import Icon from '@/components/Icon';

import style from './style.module.css';

const buttonSizeClassName = {
  md: style['button-md'],
  lg: style['button-lg'],
};

interface ShowOriginButtonProps {
  size?: 'md' | 'lg';
}

const ShowOriginButton = ({ size = 'md' }: ShowOriginButtonProps) => {
  const clickButton = () => {
    //TODO: 추후 문제 컴포넌트 구현시 해당 기능 추가
  };

  return (
    <button
      className={` ${style.button} ${buttonSizeClassName[size]}`}
      onClick={clickButton}
    >
      <p>원본 문제 보기</p>
      <Icon id='right' size='md' />
    </button>
  );
};

export default ShowOriginButton;
