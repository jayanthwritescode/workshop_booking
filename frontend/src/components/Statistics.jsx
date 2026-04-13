import React, { useState } from 'react';

const Statistics = () => {
  const [activeTab, setActiveTab] = useState('workshop');
  const [workshopFilters, setWorkshopFilters] = useState({
    fromDate: '',
    toDate: '',
    workshop: '',
    state: '',
    sortBy: 'oldest',
    showMyWorkshopsOnly: false,
  });
  const [teamFilters, setTeamFilters] = useState({
    team: '',
    fromDate: '',
    toDate: '',
  });

  const workshopStats = [
    { label: 'Total Workshops', value: 156, color: 'primary' },
    { label: 'Accepted', value: 89, color: 'success' },
    { label: 'Proposed', value: 34, color: 'warning' },
    { label: 'Completed', value: 33, color: 'info' },
  ];

  const teamStats = [
    { label: 'Workshops Conducted', value: 45, color: 'primary' },
    { label: 'Participants', value: 1234, color: 'success' },
    { label: 'Institutions Covered', value: 28, color: 'info' },
    { label: 'Pending Proposals', value: 7, color: 'warning' },
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

  const teamWorkshopData = [
    { name: 'Python', value: 18 },
    { name: 'Scilab', value: 12 },
    { name: 'OpenFOAM', value: 8 },
    { name: 'DWSIM', value: 4 },
    { name: 'OpenModelica', value: 3 },
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
        <h1>Statistics</h1>
        <p className="text-muted">
          Overview of workshop activities and team performance.
        </p>
      </div>

      <div className="tabs mb-4">
        <button 
          className={`tab-button ${activeTab === 'workshop' ? 'active' : ''}`}
          onClick={() => setActiveTab('workshop')}
        >
          Workshop Stats
        </button>
        <button 
          className={`tab-button ${activeTab === 'team' ? 'active' : ''}`}
          onClick={() => setActiveTab('team')}
        >
          Team Stats
        </button>
      </div>

      {activeTab === 'workshop' && (
        <>
          <div className="card mb-4">
            <div className="card-header">
              <h2>Filters</h2>
            </div>
            <div className="card-body">
              <div className="filters-grid">
                <div className="form-group">
                  <label className="form-label">From Date</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={workshopFilters.fromDate}
                    onChange={(e) => setWorkshopFilters({...workshopFilters, fromDate: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">To Date</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={workshopFilters.toDate}
                    onChange={(e) => setWorkshopFilters({...workshopFilters, toDate: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Workshop</label>
                  <select 
                    className="form-control"
                    value={workshopFilters.workshop}
                    onChange={(e) => setWorkshopFilters({...workshopFilters, workshop: e.target.value})}
                  >
                    <option value="">All Workshops</option>
                    <option value="python">Python for Scientific Computing</option>
                    <option value="scilab">Scilab Basics</option>
                    <option value="openfoam">OpenFOAM CFD</option>
                    <option value="dwsim">DWSIM Process Simulation</option>
                    <option value="openmodelica">OpenModelica Modeling</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">State</label>
                  <select 
                    className="form-control"
                    value={workshopFilters.state}
                    onChange={(e) => setWorkshopFilters({...workshopFilters, state: e.target.value})}
                  >
                    <option value="">All States</option>
                    <option value="accepted">Accepted</option>
                    <option value="proposed">Proposed</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Sort By</label>
                  <select 
                    className="form-control"
                    value={workshopFilters.sortBy}
                    onChange={(e) => setWorkshopFilters({...workshopFilters, sortBy: e.target.value})}
                  >
                    <option value="oldest">Oldest</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input 
                      type="checkbox"
                      className="form-checkbox"
                      checked={workshopFilters.showMyWorkshopsOnly}
                      onChange={(e) => setWorkshopFilters({...workshopFilters, showMyWorkshopsOnly: e.target.checked})}
                    />
                    <span>Show my workshops only</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="workshop-cards-grid mb-4">
            {workshopStats.map((stat, index) => (
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
        </>
      )}

      {activeTab === 'team' && (
        <>
          <div className="card mb-4">
            <div className="card-header">
              <h2>Filters</h2>
            </div>
            <div className="card-body">
              <div className="filters-grid">
                <div className="form-group">
                  <label className="form-label">From Date</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={teamFilters.fromDate}
                    onChange={(e) => setTeamFilters({...teamFilters, fromDate: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">To Date</label>
                  <input 
                    type="date" 
                    className="form-control"
                    value={teamFilters.toDate}
                    onChange={(e) => setTeamFilters({...teamFilters, toDate: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Workshop Type</label>
                  <select 
                    className="form-control"
                    value={workshopFilters.workshop}
                    onChange={(e) => setWorkshopFilters({...workshopFilters, workshop: e.target.value})}
                  >
                    <option value="">All Workshops</option>
                    <option value="python">Python for Scientific Computing</option>
                    <option value="scilab">Scilab Basics</option>
                    <option value="openfoam">OpenFOAM CFD</option>
                    <option value="dwsim">DWSIM Process Simulation</option>
                    <option value="openmodelica">OpenModelica Modeling</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="workshop-cards-grid mb-4">
            {teamStats.map((stat, index) => (
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
            <SimpleBarChart data={teamWorkshopData} title="Workshops by Software (My Team)" />
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h2>Team Activity Summary</h2>
            </div>
            <div className="card-body">
              <p className="text-muted">
                Your team has conducted 45 workshops across 28 institutions, reaching over 1200 participants. 
                Python workshops are the most conducted with 18 sessions, followed by Scilab with 12 sessions.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Statistics;
