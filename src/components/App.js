import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Calculator from '../routes/Calculator.js';
import Header from './Header';
import Home from '../routes/Home';
import Quote from '../routes/Quote';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
    </>
  );
}

export default App;
