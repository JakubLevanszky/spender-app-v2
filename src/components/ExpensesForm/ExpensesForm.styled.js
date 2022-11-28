import styled from 'styled-components';
import { mq } from '../../features/ui/theme/mq';

export const ExpFormStyled = styled.form`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  ${mq.mobile} {
    flex-direction: column;
  }
`;
