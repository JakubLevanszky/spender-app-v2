import styled from 'styled-components';
import { palette } from '../../theme/palette';
import { typography } from '../../theme/typograhpy';

export const StyledHeader = styled.header`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 70px;
  width: 100%;
  margin: 10px 0;
`;

export const Heading = styled.h1`
  ${typography.h1}
  color: ${palette.smokyWhite}
`;
