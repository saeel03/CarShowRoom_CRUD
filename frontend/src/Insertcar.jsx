import React, { useState } from 'react';
import axios from 'axios';

const Insertcar = () => {
  const [carName, setCarName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!carName || !price) {
      alert('Please enter car name and price');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:5000/insert', { carName, price });
      alert('Car added successfully');
      setCarName('');
      setPrice('');
    } catch (error) {
      console.error('Error inserting car:', error);
      alert('Failed to add car');
    }
  };

  return (
    <div>
      <h2>Add a New Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter car name"
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default Insertcar;
