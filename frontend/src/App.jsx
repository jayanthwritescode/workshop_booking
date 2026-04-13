import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';

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

const Workshops = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="container">
      <div className="d-flex gap-3 mb-4">
        <div className="flex-fill">
          <SearchBar onSearch={handleSearch} placeholder="Search workshops..." />
        </div>
        <FilterPanel onFilterChange={handleFilterChange} filters={filters} />
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Workshop Status</h2>
        </div>
        <div className="card-body">
          {searchQuery && (
            <p className="text-muted mb-3">
              Search results for: <strong>{searchQuery}</strong>
            </p>
          )}
          {Object.values(filters).some(value => value) && (
            <p className="text-muted mb-3">
              Active filters applied
            </p>
          )}
          <p>Workshop cards will be displayed here - coming soon</p>
        </div>
      </div>
    </div>
  );
};

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
