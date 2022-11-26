import styled from 'styled-components';
import { palette } from '../../theme/palette';

export const ValueSpan = styled.span`
  font-weight: bold;
  color: ${(props) => (props.negative ? palette.red : '')};
`;
