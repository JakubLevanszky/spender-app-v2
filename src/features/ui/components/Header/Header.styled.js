import styled from 'styled-components';
import { palette } from '../../theme/palette';

export const StyledHeader = styled.header`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  padding-left: 40px;
  align-items: center;
  justify-content: flex-start;
  height: 70px;
  width: 100%;
  background-color: ${palette.background};
  box-shadow: 0px 100px 80px rgba(178, 183, 219, 0.05),
    0px 41.7776px 33.4221px rgba(178, 183, 219, 0.0359427),
    0px 22.3363px 17.869px rgba(178, 183, 219, 0.0298054),
    0px 12.5216px 10.0172px rgba(178, 183, 219, 0.025),
    0px 6.6501px 5.32008px rgba(178, 183, 219, 0.0201946),
    0px 2.76726px 2.21381px rgba(178, 183, 219, 0.0140573);
`;
