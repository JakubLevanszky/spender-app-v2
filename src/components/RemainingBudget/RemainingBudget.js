/* eslint-disable react/prop-types */
import React from 'react';
import { ValueSpan } from '../../features/ui/components/ValueSpan/ValueSpan.styled';
import { Title } from '../../features/ui/theme/typograhpy';

export default function RemainingBudget(props) {
  return (
    <>
      <Title>Remaining budget:</Title> <ValueSpan>{props.income - props.remainingBudget}</ValueSpan>
    </>
  );
}
