import React from 'react';
import PropTypes from 'prop-types';

function CalcButton(props) {
  const { onClick, value } = props;
  return (
    <button type="button" className="calc-Btns" onClick={onClick}>
      {value}
    </button>
  );
}

CalcButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default CalcButton;
