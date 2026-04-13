import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import FilterChips from './components/FilterChips';
import WorkshopCard from './components/WorkshopCard';
import WorkshopCardSkeleton from './components/WorkshopCardSkeleton';
import EmptyState from './components/EmptyState';
import WorkshopDetail from './components/WorkshopDetail';
import Dashboard from './components/Dashboard';
import Statistics from './components/Statistics';
import Login from './components/Login';

// Home page with meaningful content
const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  // Sample workshop data for home page
  const featuredWorkshops = [
    {
      id: 1,
      workshopType: 'Python for Scientific Computing',
      date: '2024-02-15',
      coordinator: 'John Doe',
      institute: 'IIT Bombay',
      instructor: 'Jane Smith',
      status: 'Accepted',
      skillLevel: 'Intermediate',
      seatsAvailable: 23,
      seatsTotal: 50
    },
    {
      id: 2,
      workshopType: 'Scilab Basics',
      date: '2024-02-20',
      coordinator: 'Alice Johnson',
      institute: 'IIT Delhi',
      instructor: 'Bob Wilson',
      status: 'Proposed',
      skillLevel: 'Beginner',
      seatsAvailable: 0,
      seatsTotal: 40
    },
    {
      id: 3,
      workshopType: 'OpenFOAM CFD',
      date: '2024-01-10',
      coordinator: 'Charlie Brown',
      institute: 'IIT Madras',
      instructor: 'Diana Prince',
      status: 'Completed',
      skillLevel: 'Advanced',
      seatsAvailable: 0,
      seatsTotal: 30
    }
  ];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleViewDetails = (workshop) => {
    navigate(`/workshops/${workshop.id}`);
  };

  const handleRegister = (workshop) => {
    alert(`Registration for ${workshop.workshopType} would be handled here`);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>FOSSEE Workshops</h1>
          <p className="hero-subtitle">
            Free/Libre and Open Source Software for Education. Browse and register for workshops on Python, Scilab, OpenFOAM, and more.
          </p>

          <div className="hero-quick-stats">
            <div className="hero-quick-stat">
              <div className="hero-quick-stat-value">156</div>
              <div className="hero-quick-stat-label">Total Workshops</div>
            </div>
            <div className="hero-quick-stat">
              <div className="hero-quick-stat-value">89</div>
              <div className="hero-quick-stat-label">Accepting Now</div>
            </div>
            <div className="hero-quick-stat">
              <div className="hero-quick-stat-value">45</div>
              <div className="hero-quick-stat-label">Institutions</div>
            </div>
          </div>

          <div className="hero-search">
            <input
              type="text"
              className="hero-search-input"
              placeholder="Search workshops by name, instructor, or institute..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <button className="hero-search-button btn btn-primary" onClick={() => handleSearch(searchQuery)}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="page-content">
        <div className="container">
          <div className="mb-4">
            <h2>Featured Workshops</h2>
          </div>

          <div className="workshop-cards-grid">
            {featuredWorkshops.map(workshop => (
              <WorkshopCard
                key={workshop.id}
                workshop={workshop}
                onViewDetails={handleViewDetails}
                onRegister={handleRegister}
              />
            ))}
          </div>

          <div className="card mt-4">
            <div className="card-body text-center">
              <h3>Explore More Workshops</h3>
              <p className="text-muted mb-3">
                View all workshops, filter by type or status, and find the perfect workshop for you.
              </p>
              <button className="btn btn-primary" onClick={() => navigate('/workshops')}>
                View All Workshops
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Workshops = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const navigate = useNavigate();

  // Simulate API call loading - reduced delay for better performance
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
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
      status: 'Accepted',
      skillLevel: 'Intermediate',
      seatsAvailable: 23,
      seatsTotal: 50
    },
    {
      id: 2,
      workshopType: 'Scilab Basics',
      date: '2024-02-20',
      coordinator: 'Alice Johnson',
      institute: 'IIT Delhi',
      instructor: 'Bob Wilson',
      status: 'Proposed',
      skillLevel: 'Beginner',
      seatsAvailable: 0,
      seatsTotal: 40
    },
    {
      id: 3,
      workshopType: 'OpenFOAM CFD',
      date: '2024-01-10',
      coordinator: 'Charlie Brown',
      institute: 'IIT Madras',
      instructor: 'Diana Prince',
      status: 'Completed',
      skillLevel: 'Advanced',
      seatsAvailable: 0,
      seatsTotal: 30
    },
    {
      id: 4,
      workshopType: 'DWSIM Process Simulation',
      date: '2024-03-05',
      coordinator: 'Eve Davis',
      institute: 'IIT Kharagpur',
      instructor: 'Frank Miller',
      status: 'Accepted',
      skillLevel: 'Intermediate',
      seatsAvailable: 5,
      seatsTotal: 35
    },
    {
      id: 5,
      workshopType: 'OpenModelica Modeling',
      date: '2024-03-12',
      coordinator: 'Grace Lee',
      institute: 'IIT Kanpur',
      instructor: 'Henry Ford',
      status: 'Proposed',
      skillLevel: 'Advanced',
      seatsAvailable: 0,
      seatsTotal: 25
    },
    {
      id: 6,
      workshopType: 'Python for Data Science',
      date: '2024-02-28',
      coordinator: 'Ivy Chen',
      institute: 'IIT Roorkee',
      instructor: 'Jack White',
      status: 'Accepted',
      skillLevel: 'Intermediate',
      seatsAvailable: 18,
      seatsTotal: 45
    }
  ];

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  const handleFilterChange = useCallback((key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  }, []);

  const handleRemoveFilter = useCallback((key) => {
    setFilters(prev => {
      const newFilters = { ...prev };
      delete newFilters[key];
      return newFilters;
    });
  }, []);

  const handleClearAllFilters = useCallback(() => {
    setFilters({});
  }, []);

  const handleViewDetails = useCallback((workshop) => {
    navigate(`/workshops/${workshop.id}`);
  }, [navigate]);

  const handleRegister = useCallback((workshop) => {
    alert(`Registration for ${workshop.workshopType} would be handled here`);
  }, []);

  // Filter workshops based on search and filters
  const filteredWorkshops = mockWorkshops.filter(workshop => {
    const matchesSearch = !searchQuery ||
      workshop.workshopType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workshop.coordinator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      workshop.institute.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilters =
      (!filters.workshopType || workshop.workshopType.toLowerCase().includes(filters.workshopType.toLowerCase())) &&
      (!filters.institute || workshop.institute.toLowerCase().includes(filters.institute.toLowerCase())) &&
      (!filters.status || workshop.status === filters.status);

    return matchesSearch && matchesFilters;
  });

  return (
    <div className="workshops-page-layout">
      {/* Desktop Sidebar */}
      <aside className="workshops-sidebar">
        <div className="sidebar-header">
          <h3>Filters</h3>
        </div>
        <div className="sidebar-body">
          <div className="filter-section">
            <h4>Status</h4>
            <div className="filter-item" onClick={() => handleFilterChange('status', filters.status === 'Accepted' ? '' : 'Accepted')}>
              <div className={`filter-checkbox ${filters.status === 'Accepted' ? 'checked' : ''}`}></div>
              <span className="filter-item-label">Accepted</span>
              <span className="filter-count">89</span>
            </div>
            <div className="filter-item" onClick={() => handleFilterChange('status', filters.status === 'Proposed' ? '' : 'Proposed')}>
              <div className={`filter-checkbox ${filters.status === 'Proposed' ? 'checked' : ''}`}></div>
              <span className="filter-item-label">Proposed</span>
              <span className="filter-count">34</span>
            </div>
            <div className="filter-item" onClick={() => handleFilterChange('status', filters.status === 'Completed' ? '' : 'Completed')}>
              <div className={`filter-checkbox ${filters.status === 'Completed' ? 'checked' : ''}`}></div>
              <span className="filter-item-label">Completed</span>
              <span className="filter-count">33</span>
            </div>
          </div>

          <div className="filter-section">
            <h4>Workshop Type</h4>
            <div className="filter-item" onClick={() => handleFilterChange('workshopType', filters.workshopType === 'Python' ? '' : 'Python')}>
              <div className={`filter-checkbox ${filters.workshopType === 'Python' ? 'checked' : ''}`}></div>
              <span className="filter-item-label">Python</span>
              <span className="filter-count">45</span>
            </div>
            <div className="filter-item" onClick={() => handleFilterChange('workshopType', filters.workshopType === 'Scilab' ? '' : 'Scilab')}>
              <div className={`filter-checkbox ${filters.workshopType === 'Scilab' ? 'checked' : ''}`}></div>
              <span className="filter-item-label">Scilab</span>
              <span className="filter-count">38</span>
            </div>
            <div className="filter-item" onClick={() => handleFilterChange('workshopType', filters.workshopType === 'OpenFOAM' ? '' : 'OpenFOAM')}>
              <div className={`filter-checkbox ${filters.workshopType === 'OpenFOAM' ? 'checked' : ''}`}></div>
              <span className="filter-item-label">OpenFOAM</span>
              <span className="filter-count">28</span>
            </div>
            <div className="filter-item" onClick={() => handleFilterChange('workshopType', filters.workshopType === 'DWSIM' ? '' : 'DWSIM')}>
              <div className={`filter-checkbox ${filters.workshopType === 'DWSIM' ? 'checked' : ''}`}></div>
              <span className="filter-item-label">DWSIM</span>
              <span className="filter-count">15</span>
            </div>
          </div>

          <div className="filter-section">
            <h4>Institute</h4>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search institute..."
                value={filters.institute || ''}
                onChange={(e) => handleFilterChange('institute', e.target.value)}
              />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="workshops-main-content">
        <div className="container">
          <div className="search-section mb-4">
            <SearchBar onSearch={handleSearch} placeholder="Search workshops..." />
          </div>

          <div className="statistics-summary">
            <div className="statistic-card">
              <div className="statistic-label">Accepting Now</div>
              <div className="statistic-value accepted">89</div>
            </div>
            <div className="statistic-card">
              <div className="statistic-label">Proposed</div>
              <div className="statistic-value proposed">34</div>
            </div>
            <div className="statistic-card">
              <div className="statistic-label">Completed</div>
              <div className="statistic-value completed">33</div>
            </div>
            <div className="statistic-card">
              <div className="statistic-label">Total Seats</div>
              <div className="statistic-value seats">2,340</div>
            </div>
          </div>

          <div className="mb-4">
            <h2>All Workshops</h2>
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
                  Search results for "{searchQuery}"
                </span>
              )}
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
                  onRegister={handleRegister}
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
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Filter Button */}
      <button className="mobile-filter-button" onClick={() => setShowMobileFilters(true)}>
        <span>Filters</span>
      </button>

      {/* Mobile Filter Panel */}
      {showMobileFilters && (
        <div className="filter-overlay" onClick={() => setShowMobileFilters(false)}>
          <div className="filter-panel" onClick={(e) => e.stopPropagation()}>
            <div className="filter-header">
              <h3>Filters</h3>
              <button className="filter-close" onClick={() => setShowMobileFilters(false)} aria-label="Close Filters">
                <span className="close-icon">×</span>
              </button>
            </div>

            <div className="filter-body">
              <div className="filter-section">
                <h4>Status</h4>
                <div className="filter-item" onClick={() => handleFilterChange('status', filters.status === 'Accepted' ? '' : 'Accepted')}>
                  <div className={`filter-checkbox ${filters.status === 'Accepted' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Accepted</span>
                  <span className="filter-count">89</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterChange('status', filters.status === 'Proposed' ? '' : 'Proposed')}>
                  <div className={`filter-checkbox ${filters.status === 'Proposed' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Proposed</span>
                  <span className="filter-count">34</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterChange('status', filters.status === 'Completed' ? '' : 'Completed')}>
                  <div className={`filter-checkbox ${filters.status === 'Completed' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Completed</span>
                  <span className="filter-count">33</span>
                </div>
              </div>

              <div className="filter-section">
                <h4>Workshop Type</h4>
                <div className="filter-item" onClick={() => handleFilterChange('workshopType', filters.workshopType === 'Python' ? '' : 'Python')}>
                  <div className={`filter-checkbox ${filters.workshopType === 'Python' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Python</span>
                  <span className="filter-count">45</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterChange('workshopType', filters.workshopType === 'Scilab' ? '' : 'Scilab')}>
                  <div className={`filter-checkbox ${filters.workshopType === 'Scilab' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Scilab</span>
                  <span className="filter-count">38</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterChange('workshopType', filters.workshopType === 'OpenFOAM' ? '' : 'OpenFOAM')}>
                  <div className={`filter-checkbox ${filters.workshopType === 'OpenFOAM' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">OpenFOAM</span>
                  <span className="filter-count">28</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterChange('workshopType', filters.workshopType === 'DWSIM' ? '' : 'DWSIM')}>
                  <div className={`filter-checkbox ${filters.workshopType === 'DWSIM' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">DWSIM</span>
                  <span className="filter-count">15</span>
                </div>
              </div>

              <div className="filter-section">
                <h4>Institute</h4>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search institute..."
                    value={filters.institute || ''}
                    onChange={(e) => handleFilterChange('institute', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="filter-footer">
              <button className="btn btn-secondary" onClick={handleClearAllFilters}>
                Clear All
              </button>
              <button className="btn btn-primary" onClick={() => setShowMobileFilters(false)}>
                Apply
              </button>
            </div>
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
      case 'accepted':
        return 'var(--color-accepted)';
      case 'proposed':
        return 'var(--color-proposed)';
      case 'completed':
        return 'var(--color-completed)';
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
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/workshops" element={<Layout><Workshops /></Layout>} />
        <Route path="/workshops/:id" element={<Layout><WorkshopDetail /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/statistics" element={<Layout><Statistics /></Layout>} />
        <Route path="/status" element={<Layout><Status /></Layout>} />
        <Route path="/workshop-types" element={<Layout><WorkshopTypes /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
