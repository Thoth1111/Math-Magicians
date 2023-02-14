import React from 'react';
import '../App.css';

const Calculator = () => (
  <section>
    <table className="calc-UI">
      <tbody>
        <tr>
          <td colSpan="4"><input type="text" id="display" /></td>
        </tr>
        <tr>
          <td><button type="button">AC</button></td>
          <td><button type="button">+/-</button></td>
          <td><button type="button">%</button></td>
          <td><button type="button">&divide;</button></td>
        </tr>
        <tr>
          <td><button type="button">7</button></td>
          <td><button type="button">8</button></td>
          <td><button type="button">9</button></td>
          <td><button type="button">x</button></td>
        </tr>
        <tr>
          <td><button type="button">4</button></td>
          <td><button type="button">5</button></td>
          <td><button type="button">6</button></td>
          <td><button type="button">-</button></td>
        </tr>
        <tr>
          <td><button type="button">1</button></td>
          <td><button type="button">2</button></td>
          <td><button type="button">3</button></td>
          <td><button type="button">+</button></td>
        </tr>
        <tr>
          <td colSpan="2"><button type="button">0</button></td>
          <td><button type="button">.</button></td>
          <td><button type="button">=</button></td>
        </tr>
      </tbody>
    </table>

  </section>
);

export default Calculator;
