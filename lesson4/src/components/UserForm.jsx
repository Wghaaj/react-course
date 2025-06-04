import React, { useRef } from 'react';

const UserForm = ({ onAdd }) => {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    if (!name) return;
    onAdd({ name, married: false });
    nameRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={nameRef} placeholder="New user name" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;