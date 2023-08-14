// const { response } = require("express");

async function openUpdateForm(id) {
    const entry = await fetch(`/data/${id}`).then(response => response.json());
    // const entry = await fetch(`/update/${id}`).then(response => response.text());
    console.log('fetched:', entry);
    document.getElementById('updateId').value = entry.data._id;

    // Populate the update form fields with entry data
    document.getElementById('updateName').value = entry.data.name;
    document.getElementById('updatePhoneNumber').value = entry.data.phoneNumber;
    document.getElementById('updateEmail').value = entry.data.email;
    document.getElementById('updateHobbies').value = entry.data.hobbies;
    // Display the update form
    document.getElementById('updateFormContainer').style.display = 'block';
  }

  async function submitUpdateForm(id) {
    // console.log('ID:', id); // Check the value of id
    // Use the provided id parameter directly
    const id = document.getElementById('updateId').value
    const name = document.getElementById('updateName').value;
    const phoneNumber = document.getElementById('updatePhoneNumber').value;
    const email = document.getElementById('updateEmail').value;
    const hobbies = document.getElementById('updateHobbies').value;
  
    const response = await fetch(`/update/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phoneNumber, email, hobbies })
    });
    const responseText = await response.text();
    console.log('Response:', responseText);
    // Handle the response accordingly, e.g., refresh the page or update UI
  }