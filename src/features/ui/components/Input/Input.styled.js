import styled from 'styled-components';
import { palette } from '../../theme/palette';

export const StyledInput = styled.input`
  border-radius: 12px;
  height: 30px;
  background-color: ${palette.grey};
  border: none;
  outline: none;
  font: inherit;
  padding: 8px;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:hover {
    background-color: ${palette.greyish};
    color: ${palette.grey};
    ::placeholder,
    ::-webkit-input-placeholder {
      color: ${palette.grey};
    }
  }
  &:focus {
    border: 1px solid ${palette.greyish};
  }
`;
