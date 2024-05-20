import React from 'react';
import InputMask from 'react-input-mask';

const TelefoneMask = ({ value, onChange }) => {
  return (
    <InputMask
      mask={"+99 99 9999-9999"}
      placeholder="55 00 0000-0000"
      value={value}
      onChange={onChange}
    />
  );
};

export default TelefoneMask;
