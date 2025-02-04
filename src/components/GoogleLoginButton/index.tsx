'use client';

import GoogleIcon from './GoogleIcon';
import * as S from './style';

const GoogleLoginButton = () => {
  // 로그인 로직 구현예정
  return (
    <S.GoogleLoginButtonLayout type='button'>
      <GoogleIcon />
      <span>구글로 시작하기</span>
    </S.GoogleLoginButtonLayout>
  );
};

export default GoogleLoginButton;
