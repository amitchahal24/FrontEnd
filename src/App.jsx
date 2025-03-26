
import React, { useState, useEffect } from 'react';
import './App.css';
import UserList from './UserList';
import UserForm from './UserForm';
import { getUsers } from './services/api';

function App ()  {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    };

    const handleEdit = (user) => {
        setCurrentUser(user);
    };

    const handleSave = () => {
        setCurrentUser(null);
        fetchUsers();  // Fetch the updated user list after saving
    };

    return (
        <div className="container">
            <h1>User Management</h1>
            <h2>By Carlos Abaffy</h2>
            <UserForm currentUser={currentUser} onSave={handleSave} />
            <UserList users={users} onEdit={handleEdit} fetchUsers={fetchUsers} />
        </div>
    );
};

export default App;
