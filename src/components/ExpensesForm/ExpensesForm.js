/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import Button from '../../features/ui/components/Button/Button';
import Input from '../../features/ui/components/Input/Input';
import { ExpFormStyled } from './ExpensesForm.styled';

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
    <ExpFormStyled onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Add an expense"
        value={expensesFormData.name}
        name="name"
        onChange={handleChange}
      />
      <Input
        type="number"
        placeholder="Add a cost"
        value={expensesFormData.cost}
        name="cost"
        onChange={handleChange}
      />
      <Button small type="submit">
        <GoPlus onClick={handleSubmit} />
      </Button>
    </ExpFormStyled>
  );
}
