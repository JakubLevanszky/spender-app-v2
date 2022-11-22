import styled from 'styled-components';
import { palette } from '../../theme/palette';

export const SpenderAppStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  column-gap: 40px;
  width: 60vw;
  height: 100%;
  max-width: 828px;
`;

export const SpenderAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ValuesSection = styled.section`
  display: flex;
  flex-direction: row;
  gap: 15px;
  padding: 20px;
  align-items: center;
  justify-content: space-evenly;
`;

export const Hr = styled.hr`
  width: 100%;
  border: none;
  margin: 1.5rem auto;
  box-shadow: 0 0 10px 1px ${palette.berry};
`;
