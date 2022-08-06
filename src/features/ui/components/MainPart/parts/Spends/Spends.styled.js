import styled from 'styled-components';
import { palette } from '../../../../theme/palette';

export const SpendsSection = styled.section`
  background-color: ${palette.background};
  border-radius: 16px;
  overflow: auto;
  max-height: 480px;
  box-shadow: 0px 100px 80px rgba(181, 178, 178, 0.07),
    0px 41.7776px 33.4221px rgba(181, 178, 178, 0.0503198),
    0px 22.3363px 17.869px rgba(181, 178, 178, 0.0417275),
    0px 12.5216px 10.0172px rgba(181, 178, 178, 0.035),
    0px 6.6501px 5.32008px rgba(181, 178, 178, 0.0282725),
    0px 2.76726px 2.21381px rgba(181, 178, 178, 0.0196802);
`;
