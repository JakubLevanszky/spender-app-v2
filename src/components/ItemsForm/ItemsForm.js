/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';

import { BsPlusCircle } from 'react-icons/bs';
// import { GiConfirmed } from 'react-icons/gi';

export default function ItemsForm(props) {
  const [itemName, setItemName] = useState('');
  const [itemCost, setItemCost] = useState('');

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange = (e) => {
    setItemName(e.target.value);
    setItemCost(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      name: itemName,
      cost: itemCost
    });

    setItemName('');
    setItemCost('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={itemName}
            name="text"
            id="text"
            onChange={handleChange}
            ref={inputRef}
          />
          <input
            type="number"
            placeholder="Update your cost"
            value={itemCost}
            name="cost"
            id="cost"
            onChange={handleChange}
            ref={inputRef}
          />
          <GiConfirmed onClick={handleSubmit} />
        </>
      ) : ( */}
      <>
        <input
          type="text"
          placeholder="Add an item"
          value={itemName}
          name="text"
          id="text"
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Add cost"
          value={itemCost}
          name="cost"
          id="cost"
          onChange={handleChange}
        />
        <BsPlusCircle onClick={handleSubmit} />
      </>
      {/* )} */}
    </form>
  );
}
