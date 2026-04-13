import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Placeholder pages - will implement in next steps
const Home = () => (
  <div className="container">
    <div className="card">
      <div className="card-header">
        <h2>Welcome to FOSSEE Workshops</h2>
      </div>
      <div className="card-body">
        <p>Modern workshop booking platform - coming soon</p>
      </div>
    </div>
  </div>
);

const Statistics = () => (
  <div className="container">
    <div className="card">
      <div className="card-header">
        <h2>Workshop Statistics</h2>
      </div>
      <div className="card-body">
        <p>Statistics page - coming soon</p>
      </div>
    </div>
  </div>
);

const Workshops = () => (
  <div className="container">
    <div className="card">
      <div className="card-header">
        <h2>Workshop Status</h2>
      </div>
      <div className="card-body">
        <p>Workshop status page - coming soon</p>
      </div>
    </div>
  </div>
);

const WorkshopTypes = () => (
  <div className="container">
    <div className="card">
      <div className="card-header">
        <h2>Workshop Types</h2>
      </div>
      <div className="card-body">
        <p>Workshop types page - coming soon</p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshop-types" element={<WorkshopTypes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
