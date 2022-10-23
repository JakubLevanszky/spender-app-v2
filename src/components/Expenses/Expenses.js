/* eslint-disable react/prop-types */
import React from 'react';
import ItemsForm from '../ItemsForm/ItemsForm';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

export default function Expenses(props) {
  const addExpense = (expense) => {
    const expenses = [expense, ...props.expenses];

    props.onItemsUpdate(expenses);
  };

  const handleRemoveExpense = (id) => {
    const removeExpenseItem = [...props.expenses].filter((expense) => expense.id !== id);

    props.onItemsUpdate(removeExpenseItem);
  };

  return (
    <>
      <h1>Expenses</h1>
      <ItemsForm onSubmit={addExpense} />
      <ExpenseItem expenses={props.expenses} onRemoveExpense={handleRemoveExpense} />
    </>
  );
}
