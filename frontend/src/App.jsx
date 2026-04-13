import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import FilterChips from './components/FilterChips';
import WorkshopCard from './components/WorkshopCard';
import WorkshopCardSkeleton from './components/WorkshopCardSkeleton';
import EmptyState from './components/EmptyState';
import WorkshopDetail from './components/WorkshopDetail';
import Dashboard from './components/Dashboard';

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

  const heroStats = [
    { label: 'Total Workshops', value: 156 },
    { label: 'Active Registrations', value: 2340 },
    { label: 'Institutions', value: 45 },
    { label: 'Software Tools', value: 6 },
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

      {/* Stats Layer */}
      <div className="stats-layer">
        {heroStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <h2>{stat.value}</h2>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Page Content */}
      <section className="page-content">
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
      </section>
    </>
  );
};

const Statistics = () => {
  const stats = [
    { label: 'Total Workshops', value: 156, color: 'primary' },
    { label: 'Accepted', value: 89, color: 'success' },
    { label: 'Proposed', value: 34, color: 'warning' },
    { label: 'Completed', value: 33, color: 'info' },
  ];

  const statusDistribution = [
    { name: 'Accepted', value: 89, color: '#38a169' },
    { name: 'Proposed', value: 34, color: '#d69e2e' },
    { name: 'Completed', value: 33, color: '#3182ce' },
  ];

  const instituteData = [
    { name: 'IIT Bombay', value: 32 },
    { name: 'IIT Delhi', value: 28 },
    { name: 'IIT Madras', value: 25 },
    { name: 'IIT Kharagpur', value: 22 },
    { name: 'IIT Kanpur', value: 19 },
    { name: 'IIT Roorkee', value: 15 },
    { name: 'Others', value: 15 },
  ];

  const softwareData = [
    { name: 'Python', value: 45 },
    { name: 'Scilab', value: 32 },
    { name: 'OpenFOAM', value: 28 },
    { name: 'DWSIM', value: 19 },
    { name: 'OpenModelica', value: 22 },
    { name: 'eSim', value: 10 },
  ];

  const getStatColor = (color) => {
    switch (color) {
      case 'primary':
        return 'var(--color-primary)';
      case 'accepted':
        return 'var(--color-accepted)';
      case 'proposed':
        return 'var(--color-proposed)';
      case 'completed':
        return 'var(--color-completed)';
      default:
        return 'var(--color-primary)';
    }
  };

  const SimpleBarChart = ({ data, title }) => (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <div className="simple-bar-chart">
          {data.map((item, index) => {
            const maxValue = Math.max(...data.map(d => d.value));
            const percentage = (item.value / maxValue) * 100;
            return (
              <div key={index} className="bar-chart-item">
                <div className="bar-chart-label">{item.name}</div>
                <div className="bar-chart-bar-wrapper">
                  <div 
                    className="bar-chart-bar" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="bar-chart-value">{item.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  const SimplePieChart = ({ data, title }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = 0;
    
    return (
      <div className="card">
        <div className="card-header">
          <h3>{title}</h3>
        </div>
        <div className="card-body">
          <div className="simple-pie-chart">
            <svg viewBox="0 0 100 100" className="pie-chart-svg">
              {data.map((item, index) => {
                const percentage = (item.value / total) * 100;
                const angle = (percentage / 100) * 360;
                const startAngle = currentAngle;
                const endAngle = currentAngle + angle;
                currentAngle += angle;

                const x1 = 50 + 40 * Math.cos((startAngle - 90) * Math.PI / 180);
                const y1 = 50 + 40 * Math.sin((startAngle - 90) * Math.PI / 180);
                const x2 = 50 + 40 * Math.cos((endAngle - 90) * Math.PI / 180);
                const y2 = 50 + 40 * Math.sin((endAngle - 90) * Math.PI / 180);

                const largeArcFlag = angle > 180 ? 1 : 0;

                return (
                  <path
                    key={index}
                    d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                    fill={item.color}
                  />
                );
              })}
            </svg>
            <div className="pie-chart-legend">
              {data.map((item, index) => (
                <div key={index} className="pie-chart-legend-item">
                  <div 
                    className="legend-color" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="legend-label">{item.name}</span>
                  <span className="legend-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
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

      <div className="workshop-cards-grid mb-4">
        <SimplePieChart data={statusDistribution} title="Status Distribution" />
        <SimpleBarChart data={softwareData} title="Workshops by Software" />
      </div>

      <SimpleBarChart data={instituteData} title="Workshops by Institute" />

      <div className="card mt-4">
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
  const navigate = useNavigate();

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
    navigate(`/workshops/${workshop.id}`);
  };

  const handleRegister = (workshop) => {
    alert(`Registration for ${workshop.workshopType} would be handled here`);
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
      <div className="search-section mb-4">
        <div>
          <SearchBar onSearch={handleSearch} placeholder="Search workshops..." />
        </div>
        <FilterPanel onFilterChange={handleFilterChange} filters={filters} />
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
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/workshops/:id" element={<WorkshopDetail />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/status" element={<Status />} />
          <Route path="/workshop-types" element={<WorkshopTypes />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
