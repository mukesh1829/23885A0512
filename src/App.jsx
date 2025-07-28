import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Stats from './pages/Stats';

function App() {
  return (
    <Router>
      <div style={{ padding: '10px', backgroundColor: '#1976d2', color: 'white' }}>
        <Link to="/" style={{ marginRight: 20, color: 'white' }}>Home</Link>
        <Link to="/stats" style={{ color: 'white' }}>Statistics</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </Router>
  );
}

export default App;
