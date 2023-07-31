import React, { useState, useEffect } from 'react';

const EntryPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('./districts.json') // Replace 'YOUR_API_ENDPOINT' with your actual API URL
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData); // Update state with the fetched data
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetch function when the component mounts
  }, []); // The empty dependency array ensures that this effect runs only once

  return (
    <div>
      <h2>Hello population</h2>
      {/* Display the fetched data */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li> // Adjust this to display the relevant data from your API
        ))}
      </ul>
    </div>
  );
};

export default EntryPage;
