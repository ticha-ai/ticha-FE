import { RefObject } from 'react';

import style from './style.module.css';

interface IntroIndicatorProps {
  contents: string[];
  contentRefs: RefObject<(HTMLDivElement | null)[]>;
}

const IntroIndicator = ({ contents, contentRefs }: IntroIndicatorProps) => {
  const moveContent = (index: number) => {
    if (contentRefs.current[index]) {
      contentRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <div className={style.container}>
      <div className={style['indicator-wrapper']}>
        <div
          className={`${style['indicator-header']} ${style['indicator-block']}`}
        >
          서비스 맛보기
        </div>
        {contents.map((content, index) => (
          <button
            key={index}
            type='button'
            className={style['indicator-block']}
            onClick={() => moveContent(index)}
          >
            <span>{index + 1}</span>
            {content}
          </button>
        ))}
      </div>
    </div>
  );
};

export default IntroIndicator;
