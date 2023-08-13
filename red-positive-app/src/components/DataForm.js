import React, { useState } from 'react';

function DataForm({ addData }) {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    hobbies: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addData(formData);
    setFormData({
      name: '',
      phoneNumber: '',
      email: '',
      hobbies: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
      {/* Add other input fields for phoneNumber, email, and hobbies */}
      <button type="submit">Save</button>
    </form>
  );
}

export default DataForm;
