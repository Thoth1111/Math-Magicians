import React from 'react';
import '../App.css';

const Calculator = () => (
  <section className="calc-UI">
    <div className="keys">
      <input type="text" id="display" />
    </div>
    <div className="keys">
      <button type="button" className="calc-Btns">AC</button>
      <button type="button" className="calc-Btns">+/-</button>
      <button type="button" className="calc-Btns">%</button>
      <button type="button" className="calc-Btns">&divide;</button>
    </div>
    <div className="keys">
      <button type="button" className="calc-Btns">7</button>
      <button type="button" className="calc-Btns">8</button>
      <button type="button" className="calc-Btns">9</button>
      <button type="button" className="calc-Btns">x</button>
    </div>
    <div className="keys">
      <button type="button" className="calc-Btns">4</button>
      <button type="button" className="calc-Btns">5</button>
      <button type="button" className="calc-Btns">6</button>
      <button type="button" className="calc-Btns">-</button>
    </div>
    <div className="keys">
      <button type="button" className="calc-Btns">1</button>
      <button type="button" className="calc-Btns">2</button>
      <button type="button" className="calc-Btns">3</button>
      <button type="button" className="calc-Btns">+</button>
    </div>
    <div className="keys">
      <button type="button" className="calc-Btns">0</button>
      <button type="button" className="calc-Btns">.</button>
      <button type="button" className="calc-Btns">=</button>
    </div>
  </section>
);

export default Calculator;
