import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("urlData")) || [];
    setData(stored);
  }, []);

  return (
    <Box p={3}>
      <Typography variant="h5">Shortened URL Stats</Typography>
      {data.map((item, idx) => (
        <Box key={idx} my={2} p={2} border="1px solid gray">
          <div>Short URL: {item.shortUrl}</div>
          <div>Created At: {item.createdAt}</div>
          <div>Expires In: {item.expiry} mins</div>
          <div>Clicks: Mocked</div>
        </Box>
      ))}
    </Box>
  );
};

export default Stats;
