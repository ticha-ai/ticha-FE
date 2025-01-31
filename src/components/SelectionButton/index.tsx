'use client';

import * as S from './style';

interface SelectionButtonProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

const SelectionButton = ({
  children,
  isSelected,
  onClick,
}: SelectionButtonProps) => {
  return (
    <S.SelectionButtonLayout $isSelected={isSelected} onClick={onClick}>
      {children}
    </S.SelectionButtonLayout>
  );
};

export default SelectionButton;
