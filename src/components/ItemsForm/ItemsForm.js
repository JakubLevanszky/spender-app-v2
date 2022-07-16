/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from 'react';

import { BsPlusCircle } from 'react-icons/bs';
import { GiConfirmed } from 'react-icons/gi';

function ItemsForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });

    setInput('');
  };

  return (
    <form className="items-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="item-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <GiConfirmed className="add" onClick={handleSubmit} />
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add an item"
            value={input}
            name="text"
            className="item-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <BsPlusCircle className="confirm" onClick={handleSubmit} />
        </>
      )}
    </form>
  );
}

export default ItemsForm;
