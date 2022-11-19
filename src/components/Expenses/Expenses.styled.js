import styled from 'styled-components';
import { Title } from '../../features/ui/theme/typograhpy';

export const ExpansesWraper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  max-height: fit-content;
  scrollbar-gutter: stable both-edges;
  padding-bottom: 10px;
`;

export const TitleExpanses = styled(Title)`
  padding-bottom: 16px;
`;
