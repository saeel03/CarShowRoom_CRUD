import { useState } from 'react';
import './App.css';
import Display from './Display';
import Insertcar from './Insertcar';
import GetCarByName from './GetCarByName';

function App() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Car Showroom</h1>

      <div className="flex gap-10 mb-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => setSelectedFeature('add')}
        >
          ➕ Add Car
        </button>
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          onClick={() => setSelectedFeature('search')}
        >
          🔍 Search Car
        </button>
        <button
          className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition"
          onClick={() => setSelectedFeature('display')}
        >
          📋 Display All Cars
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl">
        {selectedFeature === 'add' && <Insertcar />}
        {selectedFeature === 'search' && <GetCarByName />}
        {selectedFeature === 'display' && <Display />}
      </div>
    </div>
  );
}

export default App;
