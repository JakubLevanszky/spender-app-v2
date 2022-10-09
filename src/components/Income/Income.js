/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function Income(props) {
  const [editing, setEditing] = useState(false);

  const toggleEdit = () => {
    setEditing((prevEditing) => !prevEditing);
  };

  return (
    <>
      <div>
        {editing ? (
          <>
            <input type="number" defaultValue={props.budget} />
            <button onClick={toggleEdit} type="button">
              Save
            </button>
            {/* have a function what will be passed to Layout component to calculate / handle budget */}
          </>
        ) : (
          <>
            <span>Income: </span>
            <button onClick={toggleEdit} type="button">
              Edit
            </button>
          </>
        )}
      </div>
    </>
  );
}
