/* eslint-disable react/prop-types */
import React from 'react';
import ExpensesForm from '../ExpensesForm/ExpensesForm';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import { ExpansesWraper, TitleExpanses } from './Expenses.styled';

export default function Expenses(props) {
  const addExpense = (expense) => {
    if (expense.name === '' || expense.cost === '') {
      window.alert(`You can't add empty expense.`);
    } else {
      const expenses = [expense, ...props.expenses];
      props.onItemsUpdate(expenses);
    }
  };

  const handleRemoveExpense = (id) => {
    const removeExpenseItem = [...props.expenses].filter((expense) => expense.id !== id);

    props.onItemsUpdate(removeExpenseItem);
  };

  return (
    <ExpansesWraper>
      <TitleExpanses>Expenses</TitleExpanses>
      <ExpensesForm onSubmit={addExpense} />
      <ExpenseItem expenses={props.expenses} onRemoveExpense={handleRemoveExpense} />
    </ExpansesWraper>
  );
}
