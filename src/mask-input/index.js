import React from 'react';
import './../css/style.css';
import InputMask from 'react-input-mask';

const TelefoneMask = ({ value, onChange }) => {
  return (
    <InputMask
      className="maskInput"
      mask="+99 999 999 999"
      placeholder="+__ ___ ___ ___"
      value={value}
      onChange={onChange}
    />
  );
};

export default TelefoneMask;
