/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';

export default function ExpensesForm(props) {
  const [expensesFormData, setExpensesFormData] = useState({ name: '', cost: '' });

  const handleChange = (e) => {
    setExpensesFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
        id: Math.floor(Math.random() * 10000)
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(expensesFormData);
    setExpensesFormData({ name: '', cost: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add an expense"
        value={expensesFormData.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Add a cost"
        value={expensesFormData.cost}
        name="cost"
        onChange={handleChange}
      />
      <button type="submit">
        <BsPlusCircle onClick={handleSubmit} />
      </button>
    </form>
  );
}
