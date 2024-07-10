// src/App.js

import React, { useState } from 'react';
import './App.css';
import ItemList from './ItemList';
import ItemForm from './ItemForm';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="App">
      <h1>Item List</h1>
      <ItemForm addItem={addItem} />
      <ItemList items={items} />
    </div>
  );
}

export default App;

