/* eslint-disable react/prop-types */
import React from 'react';
import { ValueSpan } from '../../features/ui/components/ValueSpan/ValueSpan.styled';
import { VerticalCenter } from '../../features/ui/components/VerticalCenter/VerticalCenter.styled';
import { SubTitle } from '../../features/ui/theme/typography';

export default function TotalSpent(props) {
  return (
    <VerticalCenter>
      <SubTitle>Total spent</SubTitle> <ValueSpan>{props.totalSpent}</ValueSpan>
    </VerticalCenter>
  );
}
