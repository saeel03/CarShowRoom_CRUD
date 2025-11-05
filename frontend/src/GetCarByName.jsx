import { useState } from 'react';

function GetCarByName() {
  const [carName, setCarName] = useState('');
  const [car, setCar] = useState(null);
  const [error, setError] = useState('');

  const fetchCar = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/getCarByName/${carName}`);
      const data = await response.json();

      if (response.ok) {
        setCar(data);
        setError('');
      } else {
        setCar(null);
        setError(data.message || 'Car not found');
      }
    } catch (err) {
      console.error("Error fetching car:", err);
      setError('Error retrieving car data');
    }
  };

  return (
    <div>
      <h2>Find Car by Name</h2>
      <input
        type="text"
        placeholder="Enter car name"
        value={carName}
        onChange={(e) => setCarName(e.target.value)}
      />
      <button onClick={fetchCar}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {car && (
        <div>
          <h3>Car Details</h3>
          <p><strong>Name:</strong> {car.carName}</p>
          <p><strong>Price:</strong> ₹{car.price}</p>
        </div>
      )}
    </div>
  );
}

export default GetCarByName;
