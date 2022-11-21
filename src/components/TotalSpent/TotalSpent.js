/* eslint-disable react/prop-types */
import React from 'react';
import { ValueSpan } from '../../features/ui/components/ValueSpan/ValueSpan.styled';
import { VerticalCenter } from '../../features/ui/components/VerticalCenter/VerticalCenter.styled';
import { Title } from '../../features/ui/theme/typograhpy';

export default function TotalSpent(props) {
  return (
    <VerticalCenter>
      <Title>Total spent</Title> <ValueSpan>{props.totalSpent}</ValueSpan>
    </VerticalCenter>
  );
}
