'use client';

import Image from 'next/image';

import Logo from '@/../public/images/logo.png';
import Button from '@/components/Button';
import Icon from '@/components/Icon';

import style from './style.module.css';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <Image src={Logo} alt='logo' width={91.53} height={21.5} />
      <div className={style.navbarMenus}>
        <Button size='gnb' isFull={false} color={'transparent'}>
          티챠 소개
        </Button>
        <Button size='gnb' isFull={false}>
          문제지 생성
        </Button>
        <Button size='gnb' isFull={false} color={'transparent'}>
          <Icon id={'user'} size='lg' className={style.userIcon} />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
