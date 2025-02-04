import { useStore } from 'zustand';

import paperOptionStore from '@/store/paperOptionStore';
import { OptionBlockType } from '@/types/paperOptionType';

import style from './style.module.css';

interface OptionBlockProps extends OptionBlockType {
  optionKey: string;
}

const OptionBlock = ({
  title,
  valueKey,
  description,
  subDescription,
  isRecommend,
  optionKey,
}: OptionBlockProps) => {
  const { options, setOption } = useStore(paperOptionStore);

  const clickOptionBlock = () => {
    setOption(optionKey, valueKey);
  };

  return (
    <button
      type='button'
      className={`${style.container} ${options[optionKey] === valueKey && style.selected}`}
      onClick={clickOptionBlock}
    >
      <div className={style['bedge-wrapper']}>
        {subDescription && (
          <p className={style['sub-description']}>{subDescription}</p>
        )}
        {isRecommend && <p className={style.recommend}>추천</p>}
      </div>
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
    </button>
  );
};

export default OptionBlock;
