/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
import { palette } from '../../features/ui/theme/palette';

export const ExpansesItemWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  width: 420px;
  padding: 8px 5px 0px;
`;

export const ItemWrapper = styled.div`
  justify-content: space-between;
  display: inherit;
  flex-grow: inherit;
  align-items: center;
  &:hover {
    background-color: ${palette.grey};
    border-radius: 15px;
  }
`;

export const Name = styled.span`
  flex-grow: 1;
  margin-left: 8px;
`;

export const Cost = styled.span`
  padding-right: 8px;
  font-weight: 700;
`;

export const StyledIcon = styled(RiDeleteBinLine)`
  color: ${palette.berry};
  height: 28px;
  width: 28px;
  padding: 5px;
  margin-right: 8px;
  border-radius: 15px;
  background-color: ${palette.grey};
  cursor: pointer;
  &:hover {
    color: ${palette.grey};
    background-color: ${palette.berry};
  }
`;
