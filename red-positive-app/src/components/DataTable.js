import React from 'react';

function DataTable({ data, handleSelectRow, handleDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Select</th>
          <th>ID</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th>Hobbies</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry._id}>
            <td>
              <input
                type="checkbox"
                onChange={() => handleSelectRow(entry._id)}
              />
            </td>
            <td>{entry._id}</td>
            <td>{entry.name}</td>
            <td>{entry.phoneNumber}</td>
            <td>{entry.email}</td>
            <td>{entry.hobbies}</td>
            <td>
              <button onClick={() => handleDelete(entry._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
