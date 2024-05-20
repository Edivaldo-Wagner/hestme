import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Sair = () => {
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
    
    navigate('/login');
  }, []); 
  return (
    <div>
     
    </div>
  );
};

export default Sair;
