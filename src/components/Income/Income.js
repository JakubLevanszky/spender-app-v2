/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function Income(props) {
  const [editing, setEditing] = useState(false);
  const [editedIncome, setEditedIncome] = useState(props.income);

  const toggleEdit = () => {
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

  // todo make own editing compoennt
  return (
    <>
      <div>
        {editing ? (
          <>
            <input type="number" defaultValue={editedIncome} onChange={handleIncomeChange} />
            <button onClick={handleIncomeSave} type="button">
              Save
            </button>
          </>
        ) : (
          <>
            <span>Monthly income: {props.income}</span>
            <button onClick={toggleEdit} type="button">
              Edit
            </button>
          </>
        )}
      </div>
    </>
  );
}
