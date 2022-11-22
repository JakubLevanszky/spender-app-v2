import styled, { css } from 'styled-components';

import { mq } from './mq';

export const font = {
  base: '"Inter", sans-serif',
  heading: '"Alexandria", sans-serif'
};

export const typography = {
  h1: css`
    font: 700 6.5rem ${font.heading};
    ${mq.medium} {
      font-size: 5.5rem;
    }
  `,
  h2: css`
    font-size: 5.4rem;
    ${mq.medium} {
      font-size: 1.8rem;
    }
  `
};

export const SubTitle = styled.h2`
  ${typography.h2}
`;
