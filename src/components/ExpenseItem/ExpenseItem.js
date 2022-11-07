/* eslint-disable react/prop-types */
import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';

export default function ExpenseItem(props) {
  return props.expenses.map((expense, i) => (
    <div key={i}>
      <div key={expense.id}>
        {expense.name} {expense.cost}
      </div>
      <div className="icons">
        <RiDeleteBinLine onClick={() => props.onRemoveExpense(expense.id)} />
      </div>
    </div>
  ));
}
