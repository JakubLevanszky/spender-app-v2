import { css } from 'styled-components';

import { mq } from './mq';

export const font = {
  base: '"Inter", sans-serif'
};

export const typography = {
  h1: css`
    font-size: 6rem;
    ${mq.medium} {
      font-size: 4.5rem;
    }
  `,
  h2: css`
    font-size: 5.4rem;
    ${mq.medium} {
      font-size: 2.8rem;
    }
  `
};
