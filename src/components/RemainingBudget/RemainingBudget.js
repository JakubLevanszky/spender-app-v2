/* eslint-disable react/prop-types */
import React from 'react';
import { ValueSpan } from '../../features/ui/components/ValueSpan/ValueSpan.styled';
import { SubTitle } from '../../features/ui/theme/typograhpy';
import { VerticalCenter } from '../../features/ui/components/VerticalCenter/VerticalCenter.styled';

export default function RemainingBudget(props) {
  return (
    <VerticalCenter>
      <SubTitle>Remaining budget</SubTitle>{' '}
      <ValueSpan>{props.income - props.remainingBudget}</ValueSpan>
    </VerticalCenter>
  );
}
