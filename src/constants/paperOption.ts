import { OptionSectionType } from '@/types/paperOptionType';

export const PAPER_OPTIONS: OptionSectionType[] = [
  {
    title: '단원 선택',
    optionKey: 'chatper_id',
    description: '학습하고자 하는 단원을 선택해주세요.',
    options: [
      {
        title: 'Chapter 1',
        valueKey: 1,
        description:
          'Nice campaign important short continue. Something heart crime now.',
        subDescription: '',
        isRecommend: false,
      },
      {
        title: 'Chapter 2',
        valueKey: 2,
        description:
          'Information scientist impact voice able security.\nOff local term family question add late. Agent between customer term. Wait respond hot life consumer be sport.',
        subDescription: '',
        isRecommend: false,
      },
      {
        title: 'Chapter 3',
        valueKey: 3,
        description:
          'Across simple thousand. Beat camera good several finally million together.\nPublic reason fish process others pick mention body.',
        subDescription: '',
        isRecommend: false,
      },
      {
        title: 'Chapter 4',
        valueKey: 4,
        description:
          'Race could product cost. Read agree skill story community fall high. Building officer hold cut day.',
        subDescription: '',
        isRecommend: false,
      },
      {
        title: 'Chapter 5',
        valueKey: 5,
        description:
          'Color great choose admit. Recognize often impact long deep talk lay only. Main compare interest evening apply administration.\nSupport project investment establish. Heavy throughout score.',
        subDescription: '',
        isRecommend: false,
      },
    ],
  },
  {
    title: '문항 수 선택',
    optionKey: 'question_count',
    description: '소요 시간을 확인하고 문항 수를 선택해주세요.',
    options: [
      {
        title: '5 문제',
        valueKey: 5,
        description: '간단하고 빠르게 머리를 풀고 싶은 분들께 추천해요.',
        subDescription: '약 30분 소요',
        isRecommend: false,
      },
      {
        title: '10 문제',
        valueKey: 10,
        description: '간단하고 빠르게 머리를 풀고 싶은 분들께 추천해요.',
        subDescription: '약 30분 소요',
        isRecommend: false,
      },
      {
        title: '20 문제',
        valueKey: 20,
        description: '간단하고 빠르게 머리를 풀고 싶은 분들께 추천해요.',
        subDescription: '약 30분 소요',
        isRecommend: false,
      },
      {
        title: '30 문제',
        valueKey: 30,
        description:
          '실제 모의고사 문항 수로, 깊이있는 문제풀이를 원하는 분들께 추천해요.',
        subDescription: '약 30분 소요',
        isRecommend: true,
      },
    ],
  },
  {
    title: '난이도 선택',
    optionKey: 'difficulty_level',
    description: '배점에 따라 나뉘어있는 난이도를 선택해주세요.',
    options: [
      {
        title: '랜덤',
        valueKey: 'random',
        description: '간단하고 빠르게 머리를 풀고 싶은 분들께 추천해요.',
        subDescription: '모든 배점',
        isRecommend: true,
      },
      {
        title: '쉬움',
        valueKey: 'easy',
        description: '간단하고 빠르게 머리를 풀고 싶은 분들께 추천해요.',
        subDescription: '2점 ~ 3점 배점',
        isRecommend: false,
      },
      {
        title: '보통',
        valueKey: 'normal',
        description: '간단하고 빠르게 머리를 풀고 싶은 분들께 추천해요.',
        subDescription: '3점 배점',
        isRecommend: false,
      },
      {
        title: '어려움',
        valueKey: 'hard',
        description: '간단하고 빠르게 머리를 풀고 싶은 분들께 추천해요.',
        subDescription: '4점 배점',
        isRecommend: false,
      },
    ],
  },
];
