/* eslint-disable react/prop-types */
import React from 'react';
import { ValueSpan } from '../../features/ui/components/ValueSpan/ValueSpan.styled';
import { Title } from '../../features/ui/theme/typograhpy';
import { VerticalCenter } from '../../features/ui/components/VerticalCenter/VerticalCenter.styled';

export default function RemainingBudget(props) {
  return (
    <VerticalCenter>
      <Title>Remaining budget</Title> <ValueSpan>{props.income - props.remainingBudget}</ValueSpan>
    </VerticalCenter>
  );
}
