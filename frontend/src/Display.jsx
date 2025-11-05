import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Display = () => {
  const [carArr, setCarArr] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:5000/api/getCars')
      .then((res) => {
        setCarArr(res.data);
      })
      .catch((error) => {
        console.error('Error fetching cars:', error);
      });
  }, []);

  return (
    <div>
      <h2>Available Cars</h2>
      <table border="3" style={{ margin: 10, color: 'black' }}>
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {carArr.map((car, index) => (
            <tr key={index}>
              <td>{car.carName}</td>
              <td>₹{car.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Display;
