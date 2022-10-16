/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'; // { useState }
// import ItemsForm from '../ItemsForm/ItemsForm';
import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';

export default function Item(props) {
  // editItem, completeItem
  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: ''
  // });

  // const submitUpdate = (value) => {
  //   editItem(edit.id, value);
  //   setEdit({
  //     id: null,
  //     value: ''
  //   });
  // };

  // if (edit.id) {
  //   return <ItemsForm edit={edit} onSubmit={submitUpdate} />;
  // }

  return props.items.map((item, i) => (
    <div key={i}>
      {/* <div key={item.id} onClick={() => completeItem(item.id)}>
        {item.text}
      </div> */}
      <div key={item.id}>
        {item.name} {item.cost}
      </div>
      <div className="icons">
        <RiCloseCircleLine onClick={() => props.removeItem(item.id)} />
        {/* <TiEdit onClick={() => setEdit({ id: item.id, value: item.text })} className="edit-icon" /> */}
      </div>
    </div>
  ));
}
