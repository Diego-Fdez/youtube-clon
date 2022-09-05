import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Videos } from './';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  /* Fetching data from the API. */
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data?.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} minHeight='95vh'>
      <Typography
        variant='h4'
        fontWeight={900}
        mb={3}
        color='#fff'
        ml={{ sm: '100px' }}
      >
        Search Results for:{' '}
        <span style={{ color: '#fc1503' }}>{searchTerm}</span> videos
      </Typography>
      <Box display='flex'>
        <Box sx={{ mr: { sm: '100px' } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;
