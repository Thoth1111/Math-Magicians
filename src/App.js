import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './routes/calculator';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Quote from './routes/Quote';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quote" element={<Quote />} />
      </Routes>
      {/* <div className="App">
      <Header />
      <Navbar />
      <Calculator />
    </div> */}
    </>
  );
}

export default App;
