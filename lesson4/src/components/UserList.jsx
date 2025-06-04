import React from 'react';
import UserItem from './UserItem';

const UserList = ({ users, onDelete, onUpdate, filterText, sortBy }) => {
  const filteredUsers = users
    .filter(user => user.name.toLowerCase().includes(filterText.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'asc') return a.name.localeCompare(b.name);
      if (sortBy === 'desc') return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <div>
      {filteredUsers.map(user => (
        <UserItem
          key={user.id}
          user={user}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default UserList;