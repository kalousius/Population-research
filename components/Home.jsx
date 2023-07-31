// src/components/EntryPage.js
import React from 'react';
import UgandaDataFetching from './UgandaDataFetching'; // Import the UgandaDataFetching component

const EntryPage = () => {
  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      {/* Display the UgandaDataFetching component on the Home page */}
      <UgandaDataFetching />
    </div>
  );
};

export default EntryPage;
