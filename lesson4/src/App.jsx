import React, { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { getUsers, deleteUser, updateUser, addUser } from './services/api';

const App = () => {
  const [users, setUsers] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    getUsers().then(res => setUsers(res.data));
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers(users.filter(user => user.id !== id));
  };

  const handleUpdate = async (id, data) => {
    const res = await updateUser(id, data);
    setUsers(users.map(user => (user.id === id ? res.data : user)));
  };

  const handleAdd = async (data) => {
    const res = await addUser(data);
    setUsers([...users, res.data]);
  };

  return (
    <div>
      <h1>CRUD User App</h1>
      <UserForm onAdd={handleAdd} />

      <div className="controls">
        <input
          type="text"
          placeholder="Filter by name"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
        />

        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="">No sorting</option>
          <option value="asc">Sort A-Z</option>
          <option value="desc">Sort Z-A</option>
        </select>
      </div>

      <UserList
        users={users}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
        filterText={filterText}
        sortBy={sortBy}
      />
    </div>
  );
};

export default App;