import GoogleLoginButton from '@/components/GoogleLoginButton';
import KakaoLoginButton from '@/components/KakaoLoginButton';

import style from './style.module.css';

const SocialLoginBox = () => {
  return (
    <div className={style.container}>
      <p className={style.description}>SNS계정으로 간편 로그인·회원가입</p>
      <KakaoLoginButton />
      <GoogleLoginButton />
    </div>
  );
};

export default SocialLoginBox;
