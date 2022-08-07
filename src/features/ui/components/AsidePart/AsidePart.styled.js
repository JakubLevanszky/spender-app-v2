import styled from 'styled-components';
import { palette } from '../../theme/palette';

export const StyledAside = styled.aside`
  display: grid;
  justify-content: center;
  justify-items: center;
  padding: 20px;
  border-radius: 12px;
  height: 700px;
  background-color: ${palette.background};
  box-shadow: 0px 100px 80px rgba(211, 212, 223, 0.07),
    0px 41.7776px 33.4221px rgba(211, 212, 223, 0.0503198),
    0px 22.3363px 17.869px rgba(211, 212, 223, 0.0417275),
    0px 12.5216px 10.0172px rgba(211, 212, 223, 0.035),
    0px 6.6501px 5.32008px rgba(211, 212, 223, 0.0282725),
    0px 2.76726px 2.21381px rgba(211, 212, 223, 0.0196802);
`;
