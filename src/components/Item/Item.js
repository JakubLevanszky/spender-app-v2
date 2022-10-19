/* eslint-disable react/prop-types */
import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

export default function Item(props) {
  return props.items.map((item, i) => (
    <div key={i}>
      <div key={item.id}>
        {item.name} {item.cost}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => props.removeItem(item.id)} />
      </div>
    </div>
  ));
}
