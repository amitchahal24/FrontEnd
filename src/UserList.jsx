
import React from 'react';
import { deleteUser } from './services/api';

function UserList ({ users, onEdit, fetchUsers }) {
    const handleDelete = async (id) => {
        await deleteUser(id);
        fetchUsers();  // Refresh the user list after deleting
    };

    return (
        <div>
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>{user._id.substring(user._id.length - 6)}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={() => onEdit(user)}>Edit</button>
                                <button onClick={() => handleDelete(user._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
