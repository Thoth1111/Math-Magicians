import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Calculator" element={<Calculator />}/>
      <Route path="/Quote" element={<Quote />}/>
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
