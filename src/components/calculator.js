import React from 'react';
import '../App.css';
// import operate from '../logic/operate';
// import calculate from '../logic/calculate';
import CalcButton from './calc-button';

const Calculator = () => (
  <section className="calc-UI">
    <div className="keys">
      <input type="text" id="display" />
    </div>
    <div className="keys">
      <CalcButton value="AC" />
      <CalcButton value="+" />
      <CalcButton value="%" />
      <CalcButton value="&" />
    </div>
    <div className="keys">
      <CalcButton value="7" />
      <CalcButton value="8" />
      <CalcButton value="9" />
      <CalcButton value="x" />
    </div>
    <div className="keys">
      <CalcButton value="4" />
      <CalcButton value="5" />
      <CalcButton value="6" />
      <CalcButton value="-" />
    </div>
    <div className="keys">
      <CalcButton value="1" />
      <CalcButton value="2" />
      <CalcButton value="3" />
      <CalcButton value="+" />
    </div>
    <div className="keys">
      <CalcButton value="0" />
      <CalcButton value="." />
      <CalcButton value="=" />
    </div>
  </section>
);

export default Calculator;
