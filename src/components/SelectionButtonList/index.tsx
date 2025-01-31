'use client';

import { useState } from 'react';

import SelectionButton from '@/components/SelectionButton';

import * as S from './style';

const SelectionButtonList = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleButtonClick = (buttonId: number) => {
    if (selected === buttonId) {
      setSelected(null);
    } else {
      setSelected(buttonId);
    }
  };

  return (
    <S.SelectionButtonListLayout>
      {[1, 2, 3, 4, 5].map((buttonId) => (
        <SelectionButton
          key={buttonId}
          isSelected={selected === buttonId}
          onClick={() => handleButtonClick(buttonId)}
        >
          {buttonId}
        </SelectionButton>
      ))}
    </S.SelectionButtonListLayout>
  );
};

export default SelectionButtonList;
