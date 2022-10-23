/* eslint-disable react/prop-types */
import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

export default function ExpenseItem(props) {
  return props.expenses.map((expense, i) => (
    <div key={i}>
      <div key={expense.id}>
        {expense.name} {expense.cost}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => props.removeExpense(expense.id)} />
      </div>
    </div>
  ));
}
