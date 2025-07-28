// StatsPage.js
import React, { useEffect, useState } from "react";

function StatsPage() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const storedStats = JSON.parse(localStorage.getItem("urlStats")) || [];
    setStats(storedStats);
  }, []);

  return (
    <div className="container">
      <h2>📊 URL Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Original URL</th>
            <th>Short URL</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((item, index) => (
            <tr key={index}>
              <td>{item.originalUrl}</td>
              <td><a href={item.originalUrl} target="_blank" rel="noopener noreferrer">{item.shortUrl}</a></td>
              <td>{item.clicks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StatsPage;
