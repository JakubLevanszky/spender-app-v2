/* eslint-disable react/prop-types */
import React from 'react';

export default function Balance(props) {
  return (
    <>
      <h2>Balance: {props.income - props.balance}</h2>
    </>
  );
}
