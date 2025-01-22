'use client';

import { SelectionButtonLayout } from './style';

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
    <SelectionButtonLayout $isSelected={isSelected} onClick={onClick}>
      {children}
    </SelectionButtonLayout>
  );
};

export default SelectionButton;
