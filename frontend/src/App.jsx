import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import FilterChips from './components/FilterChips';
import WorkshopCard from './components/WorkshopCard';
import WorkshopCardSkeleton from './components/WorkshopCardSkeleton';
import EmptyState from './components/EmptyState';

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
  const [isLoading, setIsLoading] = useState(true);

  // Simulate API call loading
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [searchQuery, filters]);

  // Mock data - will be replaced with API calls
  const mockWorkshops = [
    {
      id: 1,
      workshopType: 'Python for Scientific Computing',
      date: '2024-02-15',
      coordinator: 'John Doe',
      institute: 'IIT Bombay',
      instructor: 'Jane Smith',
      status: 'Accepted'
    },
    {
      id: 2,
      workshopType: 'Scilab Basics',
      date: '2024-02-20',
      coordinator: 'Alice Johnson',
      institute: 'IIT Delhi',
      instructor: 'Bob Wilson',
      status: 'Proposed'
    },
    {
      id: 3,
      workshopType: 'OpenFOAM CFD',
      date: '2024-01-10',
      coordinator: 'Charlie Brown',
      institute: 'IIT Madras',
      instructor: 'Diana Prince',
      status: 'Completed'
    },
    {
      id: 4,
      workshopType: 'DWSIM Process Simulation',
      date: '2024-03-05',
      coordinator: 'Eve Davis',
      institute: 'IIT Kharagpur',
      instructor: 'Frank Miller',
      status: 'Accepted'
    },
    {
      id: 5,
      workshopType: 'OpenModelica Modeling',
      date: '2024-03-12',
      coordinator: 'Grace Lee',
      institute: 'IIT Kanpur',
      instructor: 'Henry Ford',
      status: 'Proposed'
    },
    {
      id: 6,
      workshopType: 'Python for Data Science',
      date: '2024-02-28',
      coordinator: 'Ivy Chen',
      institute: 'IIT Roorkee',
      instructor: 'Jack White',
      status: 'Accepted'
    }
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleRemoveFilter = (filterKey) => {
    setFilters(prev => ({
      ...prev,
      [filterKey]: ''
    }));
  };

  const handleClearAllFilters = () => {
    setFilters({});
  };

  const handleViewDetails = (workshop) => {
    console.log('View details for:', workshop);
    // Will implement navigation to details page
  };

  // Filter workshops based on search and filters
  const filteredWorkshops = mockWorkshops.filter(workshop => {
    const matchesSearch = !searchQuery || 
      workshop.workshopType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workshop.coordinator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workshop.institute.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilters = 
      (!filters.workshopType || workshop.workshopType.toLowerCase().includes(filters.workshopType.toLowerCase())) &&
      (!filters.state || workshop.institute.toLowerCase().includes(filters.state.toLowerCase())) &&
      (!filters.status || workshop.status.toLowerCase() === filters.status.toLowerCase());
    
    return matchesSearch && matchesFilters;
  });

  return (
    <div className="container">
      <div className="d-flex gap-3 mb-4">
        <div className="flex-fill">
          <SearchBar onSearch={handleSearch} placeholder="Search workshops..." />
        </div>
        <FilterPanel onFilterChange={handleFilterChange} filters={filters} />
      </div>

      <FilterChips
        filters={filters}
        onRemoveFilter={handleRemoveFilter}
        onClearAll={handleClearAllFilters}
      />

      {(searchQuery || Object.values(filters).some(value => value)) && (
        <div className="mb-3">
          {searchQuery && (
            <span className="text-muted">
              Search: <strong>{searchQuery}</strong>
            </span>
          )}
          <span className="text-muted ml-2">
            ({filteredWorkshops.length} results)
          </span>
        </div>
      )}

      {isLoading ? (
        <div className="workshop-cards-grid">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <WorkshopCardSkeleton key={i} />
          ))}
        </div>
      ) : filteredWorkshops.length > 0 ? (
        <div className="workshop-cards-grid">
          {filteredWorkshops.map(workshop => (
            <WorkshopCard
              key={workshop.id}
              workshop={workshop}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="card">
          <div className="card-body">
            <EmptyState
              title="No workshops found"
              message="Try adjusting your search or filters to find what you're looking for"
              actionText="Clear Filters"
              onAction={handleClearAllFilters}
              icon="search_off"
            />
          </div>
        </div>
      )}
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
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/status" element={<Statistics />} />
          <Route path="/workshop-types" element={<WorkshopTypes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
