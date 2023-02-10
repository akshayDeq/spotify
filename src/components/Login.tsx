import { Dispatch, SetStateAction, useEffect, useState } from 'react';

interface LoginProps {
  setToken: Dispatch<SetStateAction<string>>;
}

const Login = ({ setToken }: LoginProps) => {
  const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
  const AUTH_ENDPOINT = import.meta.env.VITE_SPOTIFY_AUTH_ENDPOINT;
  const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI;
  const RESPONSE_TYPE = import.meta.env.VITE_SPOTIFY_RESPONSE_TYPE;

  useEffect(() => {
    const hash = window.location.hash ?? '';
    let token = window.localStorage.getItem('token') ?? '';

    if (!token && hash) {
      token = hash
        .substring(1)
        .split('&')
        .find((elem) => elem.startsWith('access_token'))
        .split('=')[1];

      window.location.hash = '';
      window.localStorage.setItem('token', token);
    }

    setToken(token);
  }, []);

  return (
    <div>
      <a
        href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
      >
        Login to Spotify
      </a>
    </div>
  );
};

export default Login;
