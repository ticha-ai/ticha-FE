import styled from 'styled-components';

import { theme } from '@/styles/theme';

export const ReviewButtonLayout = styled.button<{ $isSelected: boolean }>`
  width: ${theme.typography.sizes['2xl']};
  height: ${theme.typography.sizes['2xl']};
  margin: 4px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? '#f35353' : theme.colors.gray['400']};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15%;
  transition: background-color 0.2s ease-in-out;

  @media (max-width: 390px) {
    width: 17px;
    height: 17px;
    margin: 3px;
  }
`;
