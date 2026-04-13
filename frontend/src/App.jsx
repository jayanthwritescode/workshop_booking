import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import FilterChips from './components/FilterChips';
import WorkshopCard from './components/WorkshopCard';
import WorkshopCardSkeleton from './components/WorkshopCardSkeleton';
import EmptyState from './components/EmptyState';

// Home page with meaningful content
const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample workshop data for home page
  const featuredWorkshops = [
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
    }
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleViewDetails = (workshop) => {
    console.log('View details for:', workshop);
  };

  return (
    <div className="container">
      <div className="mb-4">
        <h1>FOSSEE Workshops</h1>
        <p className="text-muted">
          Free/Libre and Open Source Software for Education. Browse and register for workshops on Python, Scilab, OpenFOAM, and more.
        </p>
      </div>

      <div className="mb-4">
        <SearchBar onSearch={handleSearch} placeholder="Search workshops..." />
      </div>

      <div className="mb-4">
        <h2>Featured Workshops</h2>
      </div>

      <div className="workshop-cards-grid">
        {featuredWorkshops.map(workshop => (
          <WorkshopCard
            key={workshop.id}
            workshop={workshop}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>

      <div className="card mt-4">
        <div className="card-body text-center">
          <h3>Explore More Workshops</h3>
          <p className="text-muted mb-3">
            View all workshops, filter by type or status, and find the perfect workshop for you.
          </p>
          <button className="btn btn-primary">
            View All Workshops
          </button>
        </div>
      </div>
    </div>
  );
};

const Statistics = () => {
  const stats = [
    { label: 'Total Workshops', value: 156, color: 'primary' },
    { label: 'Accepted', value: 89, color: 'success' },
    { label: 'Proposed', value: 34, color: 'warning' },
    { label: 'Completed', value: 33, color: 'info' },
  ];

  const getStatColor = (color) => {
    switch (color) {
      case 'primary':
        return 'var(--color-primary)';
      case 'success':
        return 'var(--color-success)';
      case 'warning':
        return 'var(--color-warning)';
      case 'info':
        return 'var(--color-info)';
      default:
        return 'var(--color-primary)';
    }
  };

  return (
    <div className="container">
      <div className="mb-4">
        <h1>Workshop Statistics</h1>
        <p className="text-muted">
          Overview of workshop activities and status across all institutions.
        </p>
      </div>

      <div className="workshop-cards-grid mb-4">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <div className="detail-label">{stat.label}</div>
              <div 
                className="detail-value" 
                style={{ 
                  fontSize: '2rem', 
                  fontWeight: 600, 
                  color: getStatColor(stat.color) 
                }}
              >
                {stat.value}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="card-header">
          <h2>Recent Activity</h2>
        </div>
        <div className="card-body">
          <p className="text-muted">
            Workshop activity has increased by 23% compared to the previous quarter.
            The most popular workshop type is Python for Scientific Computing with 45 scheduled sessions.
          </p>
        </div>
      </div>
    </div>
  );
};

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

const Status = () => {
  const workshopsByStatus = {
    Accepted: [
      { id: 1, workshopType: 'Python for Scientific Computing', date: '2024-02-15', coordinator: 'John Doe', institute: 'IIT Bombay' },
      { id: 2, workshopType: 'DWSIM Process Simulation', date: '2024-03-05', coordinator: 'Eve Davis', institute: 'IIT Kharagpur' },
      { id: 3, workshopType: 'Python for Data Science', date: '2024-02-28', coordinator: 'Ivy Chen', institute: 'IIT Roorkee' },
    ],
    Proposed: [
      { id: 4, workshopType: 'Scilab Basics', date: '2024-02-20', coordinator: 'Alice Johnson', institute: 'IIT Delhi' },
      { id: 5, workshopType: 'OpenModelica Modeling', date: '2024-03-12', coordinator: 'Grace Lee', institute: 'IIT Kanpur' },
    ],
    Completed: [
      { id: 6, workshopType: 'OpenFOAM CFD', date: '2024-01-10', coordinator: 'Charlie Brown', institute: 'IIT Madras' },
    ],
  };

  const handleViewDetails = (workshop) => {
    console.log('View details for:', workshop);
  };

  return (
    <div className="container">
      <div className="mb-4">
        <h1>Workshop Status</h1>
        <p className="text-muted">
          View workshops grouped by their current status.
        </p>
      </div>

      {Object.entries(workshopsByStatus).map(([status, workshops]) => (
        <div key={status} className="mb-4">
          <div className="mb-3">
            <h2>{status}</h2>
            <span className="text-muted">{workshops.length} workshops</span>
          </div>
          <div className="workshop-cards-grid">
            {workshops.map(workshop => (
              <WorkshopCard
                key={workshop.id}
                workshop={{
                  ...workshop,
                  status: status,
                  instructor: 'TBD'
                }}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const WorkshopTypes = () => {
  const workshopTypes = [
    {
      name: 'Python for Scientific Computing',
      description: 'Learn Python for scientific computing, data analysis, and visualization.',
      workshops: 45,
      color: 'primary'
    },
    {
      name: 'Scilab Basics',
      description: 'Introduction to Scilab for numerical computation and engineering applications.',
      workshops: 32,
      color: 'success'
    },
    {
      name: 'OpenFOAM CFD',
      description: 'Computational Fluid Dynamics using OpenFOAM for engineering simulations.',
      workshops: 28,
      color: 'info'
    },
    {
      name: 'DWSIM Process Simulation',
      description: 'Chemical process simulation using DWSIM open-source software.',
      workshops: 19,
      color: 'warning'
    },
    {
      name: 'OpenModelica Modeling',
      description: 'Model-based design and simulation using OpenModelica.',
      workshops: 22,
      color: 'secondary'
    },
    {
      name: 'Python for Data Science',
      description: 'Machine learning, data science, and analytics with Python.',
      workshops: 10,
      color: 'primary'
    },
  ];

  const getTypeColor = (color) => {
    switch (color) {
      case 'primary':
        return 'var(--color-primary)';
      case 'success':
        return 'var(--color-success)';
      case 'warning':
        return 'var(--color-warning)';
      case 'info':
        return 'var(--color-info)';
      case 'secondary':
        return 'var(--color-secondary)';
      default:
        return 'var(--color-primary)';
    }
  };

  return (
    <div className="container">
      <div className="mb-4">
        <h1>Workshop Types</h1>
        <p className="text-muted">
          Browse different workshop categories and find the one that suits your needs.
        </p>
      </div>

      <div className="workshop-cards-grid">
        {workshopTypes.map((type, index) => (
          <div key={index} className="card">
            <div className="card-body">
              <div className="mb-3">
                <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                  {type.name}
                </h3>
                <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: 'var(--space-3)' }}>
                  {type.description}
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <span className="detail-label">Workshops</span>
                <span 
                  className="detail-value" 
                  style={{ 
                    fontWeight: 600, 
                    color: getTypeColor(type.color) 
                  }}
                >
                  {type.workshops}
                </span>
              </div>
            </div>
            <div className="card-footer">
              <button className="btn btn-primary btn-sm" style={{ width: '100%' }}>
                View Workshops
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/status" element={<Status />} />
          <Route path="/workshop-types" element={<WorkshopTypes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
