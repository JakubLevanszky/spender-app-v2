/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Button from '../../features/ui/components/Button/Button';
import Input from '../../features/ui/components/Input/Input';
import { ValueSpan } from '../../features/ui/components/ValueSpan/ValueSpan.styled';
import { Title } from '../../features/ui/theme/typograhpy';

export default function Income(props) {
  const [editing, setEditing] = useState(false);
  const [editedIncome, setEditedIncome] = useState(props.income);

  const handleToggleEdit = () => {
    setEditing(true);
  };

  const handleIncomeSave = () => {
    setEditing(false);
    const editedIncomeNum = Number(editedIncome);
    if (editedIncomeNum > 0) {
      props.onIncomeUpdate(editedIncomeNum);
    } else {
      window.alert('Income must be greater than 0');
    }
  };

  const handleIncomeChange = (e) => {
    setEditedIncome(e.target.value);
  };

  return (
    <>
      {editing ? (
        <>
          <Input type="number" defaultValue={editedIncome} onChange={handleIncomeChange} />
          <Button medium onClick={handleIncomeSave} type="button">
            Save
          </Button>
        </>
      ) : (
        <>
          <Title>Monthly income:</Title> <ValueSpan>{props.income}</ValueSpan>
          <Button medium onClick={handleToggleEdit} type="button">
            Edit
          </Button>
        </>
      )}
    </>
  );
}
