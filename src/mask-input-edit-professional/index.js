import React from 'react';
import  styles from './../css/professionals.module.css';
import InputMask from 'react-input-mask';

const TelefoneMask = ({ value, onChange }) => {
  return (
    <InputMask
      className="maskInputProfessional"
      mask="+99 999 999 999"
      placeholder="+__ ___ ___ ___"
      value={value}
      onChange={onChange}
    />
  );
};

export default TelefoneMask;
