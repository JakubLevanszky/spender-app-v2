/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import ItemsForm from './ItemsForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Item({ items, completeItem, removeItem, editItem }) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = (value) => {
    editItem(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <ItemsForm edit={edit} onSubmit={submitUpdate} />;
  }

  return items.map((item, i) => (
    <div className={item.isComplete ? 'item-row complete' : 'item-row'} key={i}>
      <div key={item.id} onClick={() => completeItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => removeItem(item.id)} className="delete-icon" />
        <TiEdit onClick={() => setEdit({ id: item.id, value: item.text })} className="edit-icon" />
      </div>
    </div>
  ));
}

export default Item;
