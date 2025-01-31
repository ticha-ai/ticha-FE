'use client';

import { useState } from 'react';

import StarIcon from './StarIcon';
import * as S from './style';

const BookmarkToggle = () => {
  // 추후에 문제지 관련 컴포넌트가 생성되면 상태를 상위에서 관리해야할 가능성이 있음.
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <S.BookmarkToggleLayout $isSelected={isSelected} onClick={handleClick}>
      <StarIcon />
    </S.BookmarkToggleLayout>
  );
};

export default BookmarkToggle;
