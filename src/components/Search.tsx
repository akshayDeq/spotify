import axios from 'axios';
import { useState } from 'react';

import useAuthToken from '../hooks/useAuthToken';

const Search = () => {
  const token = useAuthToken();

  const [artists, setArtists] = useState([]);
  const [searchKey, setSearchKey] = useState('');

  const searchArtists = async (e) => {
    e.preventDefault();
    const { data } = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: 'artist',
      },
    });

    setArtists(data.artists.items);
  };
  return (
    <>
      <input type="text" value={searchKey} onChange={searchArtists} />
    </>
  );
};
