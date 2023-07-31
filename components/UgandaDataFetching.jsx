import React, { useState, useEffect } from 'react';
import districtsData from "./districts.json"; // Import the JSON data


const UgandaDataFetching = () => {
  // Use the imported JSON data directly, no need for axios now
  const [districts, setDistricts] = useState([]);

  useEffect(() => {
    setDistricts(districtsData.features);
  }, []);

  return (
    <div>
      {districts.map((district) => (
        <div key={district.id}>
          <h3>{district.properties.district}</h3>
          <p>Population: {district.properties.population}</p>
        </div>
      ))}
    </div>
  );
};

export default UgandaDataFetching;
