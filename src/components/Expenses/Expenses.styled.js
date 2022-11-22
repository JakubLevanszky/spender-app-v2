import styled from 'styled-components';
import { SubTitle } from '../../features/ui/theme/typograhpy';

export const ExpansesWraper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  max-height: fit-content;
  scrollbar-gutter: stable both-edges;
  padding: 10px 0;
`;

export const TitleExpanses = styled(SubTitle)`
  padding-bottom: 16px;
`;
