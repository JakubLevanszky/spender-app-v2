import styled, { css } from 'styled-components';
import { palette } from '../../theme/palette';

export const ButtonStyled = styled.button`
  padding: 0;
  border: none;
  border-radius: 4px;
  color: ${palette.white};
  background-color: ${palette.persianGreen};
  ${(props) =>
    props.small &&
    css`
      height: 25px;
      width: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  ${(props) =>
    props.medium &&
    css`
      height: 30px;
      width: 50px;
    `}
`;
