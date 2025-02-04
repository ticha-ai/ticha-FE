'use client';

import { Fragment } from 'react';
import { useStore } from 'zustand';

import DefaultButton from '@/components/Button/DefaultButton';
import OptionSection from '@/components/Paper/Create/OptionSection';
import { PAPER_OPTIONS } from '@/constants/paperOption';
import paperOptionStore from '@/store/paperOptionStore';

import style from './style.module.css';

const CreatePage = () => {
  const { options, isFulfilled } = useStore(paperOptionStore);
  const submitPaperOption = () => {
    console.log(options);
  };

  return (
    <div className={style.container}>
      <div>
        {PAPER_OPTIONS.map((option, index) => (
          <Fragment key={index}>
            <OptionSection {...option} />
            {PAPER_OPTIONS.length - 1 !== index && (
              <hr className={style.divider} />
            )}
          </Fragment>
        ))}
      </div>
      <DefaultButton
        isFull={false}
        size='lg'
        onClick={submitPaperOption}
        disabled={!isFulfilled()}
      >
        <span className={style.button}>풀이 시작하기</span>
      </DefaultButton>
    </div>
  );
};

export default CreatePage;
