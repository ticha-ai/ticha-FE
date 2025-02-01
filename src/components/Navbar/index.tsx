'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Logo from '@/../public/images/logo.png';
import DefaultButton from '@/components/Button/DefaultButton';
import TextButton from '@/components/Button/TextButton';
import ROUTE from '@/constants/route';

import Icon from '../Icon';
import style from './style.module.css';

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={style.navbar}>
      <Image src={Logo} alt='logo' width={91.53} height={21.5} />
      <div className={style.navbarMenus}>
        <TextButton size='gnb' onClick={() => router.push(ROUTE.intro)}>
          티챠 소개
        </TextButton>
        <DefaultButton size='gnb' isFull={false}>
          문제지 생성
        </DefaultButton>
        <TextButton size='gnb'>
          <Icon id='user' size='lg' className={style.userIcon} />
        </TextButton>
      </div>
    </nav>
  );
};

export default Navbar;
