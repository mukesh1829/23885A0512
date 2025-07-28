import React from 'react';

const Stats = () => {
  // Fake data for now
  const dummyData = [
    { url: "https://short.ly/abc123", clicks: 15 },
    { url: "https://short.ly/xyz789", clicks: 9 },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📊 URL Statistics</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((row, i) => (
            <tr key={i}>
              <td><a href={row.url} target="_blank" rel="noreferrer">{row.url}</a></td>
              <td>{row.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stats;
