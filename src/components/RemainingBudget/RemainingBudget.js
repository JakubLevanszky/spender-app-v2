/* eslint-disable react/prop-types */
import React from 'react';

export default function RemainingBudget(props) {
  return (
    <>
      <h2>Remaining budget: {props.income - props.remainingBudget}</h2>
    </>
  );
}
