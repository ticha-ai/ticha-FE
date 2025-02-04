'use client';

import KakaoIcon from './KakaoIcon';
import * as S from './style';

const KakaoLoginButton = () => {
  const REST_API_KEY = process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID;
  const REDIRECT_URI = process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URL;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handelKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <S.KakaoLoginButtonLayout type='button' onClick={handelKakaoLogin}>
      <KakaoIcon />
      <span>카카오로 시작하기</span>
    </S.KakaoLoginButtonLayout>
  );
};

export default KakaoLoginButton;
