import styled from 'styled-components';

import { theme } from '@/styles/theme';

export const SelectionButtonLayout = styled.button<{
  $isSelected: boolean;
}>`
  background-color: ${({ $isSelected }) =>
    $isSelected ? theme.colors.main['400'] : theme.colors.gray['50']};
  color: ${({ $isSelected }) =>
    $isSelected ? theme.colors.gray['0'] : theme.colors.gray['400']};
  border-radius: 4px;
  font-size: ${theme.typography.sizes.sm};
  font-weight: ${theme.typography.weights.medium};
  height: 22px;
  width: 22px;
  margin: 0 auto 0 0;

  @media (max-width: 390px) {
    font-size: ${theme.typography.sizes.xs};
  }
`;
