import styled from 'styled-components';

import { theme } from '@/styles/theme';

export const GoogleLoginButtonLayout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${theme.colors.gray['0']};
  color: ${theme.colors.gray['700']};
  border-radius: 6px;
  height: ${theme.typography.sizes['6xl']};
  width: 100%;
  font-size: ${theme.typography.sizes.md};
  font-weight: ${theme.typography.weights.medium};
  padding: 8px 88px;

  @media (max-width: 390px) {
    font-size: ${theme.typography.sizes.xs};
  }
`;
