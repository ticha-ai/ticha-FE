'use client';

import Icon from '../Icon';
import * as S from './style';
import styles from './style.module.css';

const GoogleLoginButton = () => {
  // 로그인 로직 구현예정
  return (
    <S.GoogleLoginButtonLayout type='button'>
      <Icon id='google-icon' size='md' className={styles['google-icon']} />
      <span>구글로 시작하기</span>
    </S.GoogleLoginButtonLayout>
  );
};

export default GoogleLoginButton;
