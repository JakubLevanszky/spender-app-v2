/* eslint-disable react/prop-types */
import React from 'react';
import ItemsForm from '../ItemsForm/ItemsForm';
import Item from '../Item/Item';

export default function ItemsList(props) {
  const addItem = (item) => {
    const newItems = [item, ...props.items];

    props.onItemsUpdate(newItems);
  };

  const removeItem = (id) => {
    const removeArr = [...props.items].filter((item) => item.id !== id);

    props.onItemsUpdate(removeArr);
  };

  return (
    <>
      <h1>List</h1>
      <ItemsForm onSubmit={addItem} />
      <Item items={props.items} removeItem={removeItem} />
      {/* editItem={editItem} completeItem={completeItem} */}
      {/* <button onClick={handleClick}>test</button> */}
    </>
  );
}
