import { Dispatch, SetStateAction } from 'react';

interface LogoutProps {
  setToken: Dispatch<SetStateAction<string>>;
}

const Logout = ({ setToken }: LogoutProps) => {
  const handleLogout = () => {
    setToken('');
    window.localStorage.removeItem('token');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
