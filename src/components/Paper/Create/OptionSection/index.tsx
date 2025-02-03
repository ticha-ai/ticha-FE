import { OptionSectionType } from '@/types/paperOptionType';

import OptionBlock from '../OptionBlock';
import style from './style.module.css';

const OptionSection = ({
  title,
  optionKey,
  description,
  options,
}: OptionSectionType) => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>{title}</h2>
      <p className={style.description}>{description}</p>
      <div className={style['option-wrapper']}>
        {options.map((option, index) => (
          <OptionBlock key={index} {...option} optionKey={optionKey} />
        ))}
      </div>
    </div>
  );
};

export default OptionSection;
