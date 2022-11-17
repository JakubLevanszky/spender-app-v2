import styled from 'styled-components';
import { typography } from '../../theme/typograhpy';

export const StyledHeader = styled.header`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
`;

export const Heading = styled.h1`
  ${typography.h1}
`;
