/* eslint-disable react/prop-types */
import React from 'react';
import { Cost, ExpansesItemWraper, ItemWrapper, Name, StyledIcon } from './ExpenseItem.styled';

export default function ExpenseItem(props) {
  return props.expenses.map((expense, i) => (
    <ExpansesItemWraper key={i}>
      <ItemWrapper key={expense.id}>
        <Name>{expense.name}</Name>
        <Cost>{expense.cost}</Cost>
        <StyledIcon onClick={() => props.onRemoveExpense(expense.id)} />
      </ItemWrapper>
    </ExpansesItemWraper>
  ));
}
