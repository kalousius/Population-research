// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Register from '../components/Register';
import Login from '../components/Login';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EntryPage from '../components/EntryPage'; // Import the EntryPage component
import UgandaDataFetching from '../components/UgandaDataFetching';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<EntryPage />} /> {/* Use EntryPage as the home page */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      {/* Add the UgandaDataFetching component to a specific route */}
      <Route path="/uganda-data" element={<UgandaDataFetching />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;