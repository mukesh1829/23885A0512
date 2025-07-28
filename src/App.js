// App.js
import './App.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import StatsPage from "./StatsPage";
import "./App.css";

function App() {
  const [longUrl, setLongUrl] = useState("");
  const [expiry, setExpiry] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const generateShortUrl = () => {
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    let shortCode = "";
    for (let i = 0; i < 6; i++) {
      shortCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    const fullShortUrl = `https://short.ly/${shortCode}`;
    setShortUrl(fullShortUrl);
    saveToLocalStorage(fullShortUrl, longUrl);
  };

  const saveToLocalStorage = (shortUrl, originalUrl) => {
    let stats = JSON.parse(localStorage.getItem("urlStats")) || [];
    stats.push({ shortUrl, originalUrl, clicks: 0 });
    localStorage.setItem("urlStats", JSON.stringify(stats));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!longUrl) return;
    generateShortUrl();
  };

  const handleClick = (e, shortUrl, originalUrl) => {
    e.preventDefault();
    increaseClick(shortUrl);
    window.open(originalUrl, '_blank');
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <h1>🔗 URL Shortener</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={longUrl}
                  onChange={(e) => setLongUrl(e.target.value)}
                  placeholder="Enter long URL"
                  required
                />
                <input
                  type="number"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="Expiry (in minutes)"
                />
                <button type="submit">Shorten</button>
              </form>
              {shortUrl && (
                <div>
                  <p>Short URL: <a href="#" onClick={(e) => handleClick(e, shortUrl, longUrl)}>{shortUrl}</a></p>
                  <Link to="/stats">📊 Go to Stats</Link>
                </div>
              )}
            </div>
          }
        />
        <Route path="/stats" element={<StatsPage />} />
      </Routes>
    </Router>
  );
}

export const increaseClick = (shortUrl) => {
  let stats = JSON.parse(localStorage.getItem("urlStats")) || [];
  stats = stats.map((item) => {
    if (item.shortUrl === shortUrl) {
      return { ...item, clicks: item.clicks + 1 };
    }
    return item;
  });
  localStorage.setItem("urlStats", JSON.stringify(stats));
};

export default App;
