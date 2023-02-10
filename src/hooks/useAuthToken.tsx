import { useState } from 'react';

const useAuthToken = () => {
  const [token] = useState(localStorage.getItem('token'));

  return token;
};

export default useAuthToken;
