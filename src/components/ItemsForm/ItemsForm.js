/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';

import { BsPlusCircle } from 'react-icons/bs';
// import { GiConfirmed } from 'react-icons/gi';

export default function ItemsForm(props) {
  const [itemsFormData, setItemsFormData] = useState({ name: '', cost: '' });

  // const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // });

  const handleChange2 = (e) => {
    const { name, value, type } = e.target;
    setItemsFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
        id: Math.floor(Math.random() * 10000)
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(itemsFormData);
    setItemsFormData({ name: '', cost: '' });
  };

  // const handleChange = (e) => {
  //   setItemName(e.target.value);
  //   setItemCost(e.target.value);
  // };

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
          value={itemsFormData.name}
          name="name"
          onChange={handleChange2}
        />
        <input
          type="number"
          placeholder="Add a cost"
          value={itemsFormData.cost}
          name="cost"
          onChange={handleChange2}
        />
        <BsPlusCircle onClick={handleSubmit} />
      </>
      {/* )} */}
    </form>
  );
}
