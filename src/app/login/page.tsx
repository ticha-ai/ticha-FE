import Image from 'next/image';

import Logo from '@/../public/images/logo.png';
import SocialLoginBox from '@/components/SocialLoginBox';

import style from './style.module.css';

const Login = () => {
  return (
    <div className={style.wrapper}>
      <Image src={Logo} alt='logo' />
      <div className={style.container}>
        <h1 className={style.title}>로그인하기</h1>
        <SocialLoginBox />
        <hr />
        <p className={style.problem}>로그인에 문제가 있으신가요?</p>
      </div>
    </div>
  );
};

export default Login;
