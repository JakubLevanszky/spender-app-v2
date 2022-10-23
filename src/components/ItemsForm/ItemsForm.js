/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { BsPlusCircle } from 'react-icons/bs';

export default function ItemsForm(props) {
  const [itemsFormData, setItemsFormData] = useState({ name: '', cost: '' });

  const handleChange = (e) => {
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

  // todo add value to the form while press ENTER

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add an item"
        value={itemsFormData.name}
        name="name"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Add a cost"
        value={itemsFormData.cost}
        name="cost"
        onChange={handleChange}
      />
      <button type="submit">
        <BsPlusCircle onClick={handleSubmit} />
      </button>
    </form>
  );
}
