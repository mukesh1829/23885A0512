import { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import logger from '../utils/logger';

const ShortenerForm = () => {
  const [urls, setUrls] = useState([{ longUrl: '', validity: '', shortcode: '' }]);
  const [shortened, setShortened] = useState([]);

  const handleChange = (index, field, value) => {
    const updated = [...urls];
    updated[index][field] = value;
    setUrls(updated);
  };

  const handleShorten = () => {
    const results = urls.map((entry, idx) => {
      const shortcode = entry.shortcode || Math.random().toString(36).substr(2, 5);
      const expiry = entry.validity ? parseInt(entry.validity) : 30;
      const shortUrl = `http://localhost:3000/${shortcode}`;
      logger("Shortened URL", { ...entry, shortcode, expiry, shortUrl });
      return { ...entry, shortcode, expiry, shortUrl, createdAt: new Date().toISOString() };
    });
    setShortened(results);
    localStorage.setItem("urlData", JSON.stringify(results));
  };

  return (
    <Box p={3}>
      <Typography variant="h5">Shorten Your URLs</Typography>
      {urls.map((url, idx) => (
        <Box key={idx} my={2}>
          <TextField label="Long URL" fullWidth value={url.longUrl}
            onChange={(e) => handleChange(idx, 'longUrl', e.target.value)} />
          <TextField label="Validity (mins)" type="number" value={url.validity}
            onChange={(e) => handleChange(idx, 'validity', e.target.value)} />
          <TextField label="Custom Shortcode" value={url.shortcode}
            onChange={(e) => handleChange(idx, 'shortcode', e.target.value)} />
        </Box>
      ))}
      <Button variant="contained" onClick={handleShorten}>Shorten</Button>
      <Box mt={4}>
        <Typography variant="h6">Shortened URLs:</Typography>
        {shortened.map((url, idx) => (
          <Box key={idx} p={1} border="1px solid gray">
            <div>Original: {url.longUrl}</div>
            <div>Short: <a href={url.shortUrl}>{url.shortUrl}</a></div>
            <div>Expires in: {url.expiry} mins</div>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ShortenerForm;
