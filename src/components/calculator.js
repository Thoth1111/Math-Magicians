import React, { useState } from 'react';
import '../App.css';
import calculate from '../logic/calculate';
import CalcButton from './calc-button';

const Calculator = () => {
  const [calcObj, setCalcObj] = useState({ total: null, next: null, operation: null });

  const handleButtonClick = (buttonName) => {
    const newCalcObj = calculate(calcObj, buttonName);
    setCalcObj(newCalcObj);
  };

  return (
    <section className="calc-UI">
      <div id="display">
        {calcObj.next || calcObj.operation || calcObj.total || '0'}
      </div>
      <div className="keys">
        <CalcButton value="AC" onClick={() => handleButtonClick('AC')} />
        <CalcButton value="+/-" onClick={() => handleButtonClick('+/-')} />
        <CalcButton value="%" onClick={() => handleButtonClick('%')} />
        <CalcButton value="&divide;" onClick={() => handleButtonClick('&divide;')} />
      </div>
      <div className="keys">
        <CalcButton value="7" onClick={() => handleButtonClick('7')} />
        <CalcButton value="8" onClick={() => handleButtonClick('8')} />
        <CalcButton value="9" onClick={() => handleButtonClick('9')} />
        <CalcButton value="x" onClick={() => handleButtonClick('x')} />
      </div>
      <div className="keys">
        <CalcButton value="4" onClick={() => handleButtonClick('4')} />
        <CalcButton value="5" onClick={() => handleButtonClick('5')} />
        <CalcButton value="6" onClick={() => handleButtonClick('6')} />
        <CalcButton value="-" onClick={() => handleButtonClick('-')} />
      </div>
      <div className="keys">
        <CalcButton value="1" onClick={() => handleButtonClick('1')} />
        <CalcButton value="2" onClick={() => handleButtonClick('2')} />
        <CalcButton value="3" onClick={() => handleButtonClick('3')} />
        <CalcButton value="+" onClick={() => handleButtonClick('+')} />
      </div>
      <div className="keys">
        <CalcButton value="0" onClick={() => handleButtonClick('0')} />
        <CalcButton value="." onClick={() => handleButtonClick('.')} />
        <CalcButton value="=" onClick={() => handleButtonClick('=')} />
      </div>
    </section>
  );
};

export default Calculator;
