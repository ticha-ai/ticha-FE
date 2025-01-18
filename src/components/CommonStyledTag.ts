import styled from 'styled-components';

import theme from '@/styles/theme';

export const Text = styled.p<{
  size: keyof typeof theme.typography.sizes;
  weight: keyof typeof theme.typography.weights;
}>`
  font-size: ${({ theme, size }) => theme.typography.sizes[size]};
  font-weight: ${({ theme, weight }) => theme.typography.weights[weight]};
`;
