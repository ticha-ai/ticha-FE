import Image from 'next/image';
import { ReactNode, Ref } from 'react';

import DefaultImage from '@/../public/images/default_background.png';

import style from './style.module.css';

interface IntroBlockProps {
  title: string;
  describe: ReactNode;
  content: ReactNode;
  ref: Ref<HTMLDivElement | null>;
}

const IntroBlock = ({ title, describe, content, ref }: IntroBlockProps) => {
  return (
    <div className={style.container} ref={ref}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.describe}>{describe}</p>
      <div className={style['content-wrapper']}>
        <Image
          src={DefaultImage}
          alt='default-image'
          fill={true}
          style={{
            objectFit: 'fill',
          }}
        />
      </div>
      {/* {content} */}
    </div>
  );
};

export default IntroBlock;
