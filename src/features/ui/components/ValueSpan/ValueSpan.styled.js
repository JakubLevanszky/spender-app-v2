import styled from 'styled-components';

export const ValueSpan = styled.span`
  font-weight: bold;
  color: ${(props) => (props.negative ? 'red' : '')};
`;
