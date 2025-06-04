import React, { useState } from 'react';

const UserItem = ({ user, onDelete, onUpdate }) => {
  const [name, setName] = useState(user.name);
  const [married, setMarried] = useState(user.married);

  const handleUpdate = () => {
    onUpdate(user.id, { ...user, name, married });
  };

  return (
    <div className="user-card">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>
        Married:
        <input
          type="checkbox"
          checked={married}
          onChange={(e) => setMarried(e.target.checked)}
        />
      </label>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={() => onDelete(user.id)}>Delete</button>
    </div>
  );
};

export default UserItem;
