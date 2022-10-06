import styled from 'styled-components';
import { palette } from '../../theme/palette';

export const Container = styled.div`
  width: 1000px;
  height: 70vh;
  margin: 0 auto;
  padding: 0 auto;
  box-sizing: border-box;
  background-color: ${palette.white};
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 15px -1px ${palette.smokyBlack};
  border-radius: 10px;
`;
