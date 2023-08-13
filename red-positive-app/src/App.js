import React, { useState, useEffect } from 'react';
import './App.css';
import DataForm from './components/DataForm';
import DataTable from './components/DataTable';

function App() {
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);


  // Fetch data from the API
  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAddData = (newData) => {
    // Send newData to API for adding
    // Example: fetch('/api/data', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => setData([...data, data]))
    //   .catch((error) => console.error(error));
  };

  const handleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleDelete = (id) => {
    // Send delete request for the selected row
    // Example: fetch(`/api/data/${id}`, { method: 'DELETE' })
    //   .then(() => setData(data.filter((entry) => entry._id !== id)))
    //   .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <DataForm addData={handleAddData} />
      <DataTable
        data={data}
        handleSelectRow={handleSelectRow}
        handleDelete={handleDelete}
      />
      {/* Add buttons, pop-ups, and other UI elements as needed */}
    </div>
  );
}

export default App;