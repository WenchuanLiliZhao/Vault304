import React from 'react';
import { useNavigate } from 'react-router-dom';

export const GoBackButton: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button onClick={handleGoBack} style={{ padding: '10px', fontSize: '16px' }}>
      Go Back
    </button>
  );
};
