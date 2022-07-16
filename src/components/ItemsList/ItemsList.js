import React, { useState } from 'react';
import ItemsForm from './ItemsForm';
import Item from './Item';
import { Container } from '../../features/ui/components/Container/Container.styled';

function ItemsList() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }

    const newItems = [item, ...items];

    setItems(newItems);
  };

  const editItem = (itemId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setItems((prev) => prev.map((i) => (i.id === itemId ? newValue : i)));
  };

  const removeItem = (id) => {
    const removeArr = [...items].filter((item) => item.id !== id);

    setItems(removeArr);
  };

  const completeItem = (id) => {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <Container>
      <h1>List</h1>
      <ItemsForm onSubmit={addItem} />
      <Item items={items} completeItem={completeItem} removeItem={removeItem} editItem={editItem} />
    </Container>
  );
}

export default ItemsList;
