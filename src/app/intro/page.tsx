'use client';

import Image from 'next/image';
import { useRef } from 'react';

import IntroImage from '@/../public/images/intro_background.png';
import IntroBlock from '@/components/Intro/IntroBlock';
import IntroIndicator from '@/components/Intro/introIndicator';

import style from './style.module.css';

const INTRO_CONTENT = [
  {
    title: '나만의 맞춤형 문제지 생성',
    describe: (
      <>
        사용자는 원하는 단원과 문항 수를 선택해
        <br />
        자신만의 문제지를 손쉽게 생성할 수 있습니다.
        <br />
        단원별 최소 문제 수와 난이도 조정도 가능합니다.
      </>
    ),
    content: <div></div>,
  },
  {
    title: '문제 풀이와 맞춤형 학습 지원',
    describe: (
      <>
        생성된 문제지를 풀이하고
        <br />
        제출 후 AI 채점 결과를 확인하세요.
        <br />
        추가 학습이 필요한 단원 정보를 제공해
        <br />
        효율적인 복습을 도와줍니다.
      </>
    ),
    content: <div></div>,
  },
  {
    title: 'AI와 함께 학습 개념 점검',
    describe: (
      <>
        채점 결과를 기반으로 틀린 문제를 복습하며
        <br />
        AI 봇과 대화로 개념을 더 명확히 이해할 수 있습니다.
        <br />
        올바른 학습 방향을 제시하고 성장 가능성을 확장합니다.
      </>
    ),
    content: <div></div>,
  },
];

const IntroPage = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <div className={style.container}>
      <div className={style['intro-header']}>
        <div className={style['image-wrapper']}>
          <Image
            src={IntroImage}
            alt='intro-header-image'
            fill={true}
            priority
          />
        </div>
        <div className={style['intro-header-content']}>
          <h2>
            TICHA는 교육 불평등 문제를
            <br />
            해소하기 위해 시작되었습니다
          </h2>
          <p>
            디지털 환경을 통해 누구나 AI 맞춤형 학습으로
            <br />
            학습 수준을 분석해 부족한 부분을 채울 수 있도록 도우며
            <br />
            학생 간의 학습 기회 격차를 줄이고자 합니다.
          </p>
        </div>
      </div>
      <div className={style['intro-wrapper']}>
        <div className={style['intro-blocks']}>
          {INTRO_CONTENT.map((content, index) => (
            <IntroBlock
              key={index}
              {...content}
              ref={(element: HTMLDivElement) => {
                refs.current[index] = element;
              }}
            />
          ))}
        </div>
        <IntroIndicator
          contents={INTRO_CONTENT.map((content) => content.title)}
          contentRefs={refs}
        />
      </div>
    </div>
  );
};

export default IntroPage;
