import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="left-panel">
          <div className="brand">
            <div className="brand-logo">
              <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 5C15.0589 5 7 13.0589 7 23C7 32.9411 15.0589 41 25 41C34.9411 41 43 32.9411 43 23C43 13.0589 34.9411 5 25 5ZM25 9C32.732 9 39 15.268 39 23C39 30.732 32.732 37 25 37C17.268 37 11 30.732 11 23C11 15.268 17.268 9 25 9ZM25 13C20.5817 13 17 16.5817 17 21C17 25.4183 20.5817 29 25 29C29.4183 29 33 25.4183 33 21C33 16.5817 29.4183 13 25 13Z" fill="white"/>
              </svg>
            </div>
            <h1 className="brand-title">Gradiator</h1>
            <p className="brand-tagline">Elevate Your Experience</p>
          </div>
          
          <div className="panel-content">
            <h2 className="panel-title">Welcome Back Creative!</h2>
            <p className="panel-subtitle">We Are Happy To See You Again</p>
          </div>
          
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        
        <div className="right-panel">
          <div className="empty-space">
            <h3>Empty Space</h3>
            <p>This area is intentionally left blank</p>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
