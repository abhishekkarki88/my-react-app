// React frontend example using fetch
fetch('http://localhost:5000/api/items')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching data:', error));

// Example POST request
const newItem = { name: 'New Item', description: 'Description for New Item' };
fetch('http://localhost:5000/api/items', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newItem),
})
.then(response => response.json())
.then(data => console.log('Successfully added:', data))
.catch(error => console.error('Error adding item:', error));
