import React, { useState } from 'react';

function Income() {
  const [editing, setEditing] = useState(false);

  const toggleEdit = () => {
    setEditing((prevEditing) => !prevEditing);
  };

  return (
    <>
      <h1>Income</h1>
      <div>
        {editing ? (
          <>
            <input type="number" />
            <button onClick={toggleEdit} type="button">
              Save
            </button>
          </>
        ) : (
          <>
            <span>Budget: </span>
            <button onClick={toggleEdit} type="button">
              Edit
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default Income;
