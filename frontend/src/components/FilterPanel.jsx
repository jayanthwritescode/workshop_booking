import React, { useState } from 'react';

const FilterPanel = ({ onFilterChange, filters = {} }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [localFilters, setLocalFilters] = useState({
    workshopType: filters.workshopType || '',
    state: filters.state || '',
    institute: filters.institute || '',
    fromDate: filters.fromDate || '',
    toDate: filters.toDate || '',
    status: filters.status || '',
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (field, value) => {
    setLocalFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleApply = () => {
    onFilterChange(localFilters);
    setIsOpen(false);
  };

  const handleClear = () => {
    const clearedFilters = {
      workshopType: '',
      state: '',
      institute: '',
      fromDate: '',
      toDate: '',
      status: '',
    };
    setLocalFilters(clearedFilters);
    onFilterChange(clearedFilters);
    setIsOpen(false);
  };

  return (
    <>
      <button className="btn btn-secondary filter-toggle-button" onClick={handleToggle}>
        Filters
        {Object.values(localFilters).some(value => value) && (
          <span className="filter-badge"></span>
        )}
      </button>

      {isOpen && (
        <div className="filter-overlay" onClick={handleToggle}>
          <div className="filter-panel" onClick={(e) => e.stopPropagation()}>
            <div className="filter-header">
              <h3>Filters</h3>
              <button className="filter-close" onClick={handleToggle} aria-label="Close Filters">
                <span className="close-icon">close</span>
              </button>
            </div>

            <div className="filter-body">
              <div className="filter-section">
                <h4>Status</h4>
                <div className="filter-item" onClick={() => handleFilterChange('status', localFilters.status === 'Accepted' ? '' : 'Accepted')}>
                  <div className={`filter-checkbox ${localFilters.status === 'Accepted' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Accepted</span>
                  <span className="filter-count">89</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterChange('status', localFilters.status === 'Proposed' ? '' : 'Proposed')}>
                  <div className={`filter-checkbox ${localFilters.status === 'Proposed' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Proposed</span>
                  <span className="filter-count">34</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterChange('status', localFilters.status === 'Completed' ? '' : 'Completed')}>
                  <div className={`filter-checkbox ${localFilters.status === 'Completed' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Completed</span>
                  <span className="filter-count">33</span>
                </div>
              </div>

              <div className="filter-section">
                <h4>Workshop Type</h4>
                <div className="filter-item" onClick={() => handleFilterChange('workshopType', localFilters.workshopType === 'Python' ? '' : 'Python')}>
                  <div className={`filter-checkbox ${localFilters.workshopType === 'Python' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Python</span>
                  <span className="filter-count">45</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterChange('workshopType', localFilters.workshopType === 'Scilab' ? '' : 'Scilab')}>
                  <div className={`filter-checkbox ${localFilters.workshopType === 'Scilab' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Scilab</span>
                  <span className="filter-count">38</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterChange('workshopType', localFilters.workshopType === 'OpenFOAM' ? '' : 'OpenFOAM')}>
                  <div className={`filter-checkbox ${localFilters.workshopType === 'OpenFOAM' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">OpenFOAM</span>
                  <span className="filter-count">28</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterChange('workshopType', localFilters.workshopType === 'DWSIM' ? '' : 'DWSIM')}>
                  <div className={`filter-checkbox ${localFilters.workshopType === 'DWSIM' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">DWSIM</span>
                  <span className="filter-count">15</span>
                </div>
              </div>

              <div className="filter-section">
                <h4>Date Range</h4>
                <div className="form-group">
                  <label className="form-label">From</label>
                  <input
                    type="date"
                    className="form-control"
                    value={localFilters.fromDate || ''}
                    onChange={(e) => handleFilterChange('fromDate', e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">To</label>
                  <input
                    type="date"
                    className="form-control"
                    value={localFilters.toDate || ''}
                    onChange={(e) => handleFilterChange('toDate', e.target.value)}
                  />
                </div>
              </div>

              <div className="filter-section">
                <h4>State</h4>
                <div className="filter-item" onClick={() => handleFilterChange('state', localFilters.state === 'Maharashtra' ? '' : 'Maharashtra')}>
                  <div className={`filter-checkbox ${localFilters.state === 'Maharashtra' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Maharashtra</span>
                  <span className="filter-count">52</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterChange('state', localFilters.state === 'Delhi' ? '' : 'Delhi')}>
                  <div className={`filter-checkbox ${localFilters.state === 'Delhi' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Delhi</span>
                  <span className="filter-count">38</span>
                </div>
                <div className="filter-item" onClick={() => handleFilterChange('state', localFilters.state === 'Tamil Nadu' ? '' : 'Tamil Nadu')}>
                  <div className={`filter-checkbox ${localFilters.state === 'Tamil Nadu' ? 'checked' : ''}`}></div>
                  <span className="filter-item-label">Tamil Nadu</span>
                  <span className="filter-count">31</span>
                </div>
              </div>

              <div className="filter-section">
                <h4>Institute</h4>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search institute..."
                    value={localFilters.institute || ''}
                    onChange={(e) => handleFilterChange('institute', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="filter-footer">
              <button className="btn btn-secondary" onClick={handleClear}>
                Clear All
              </button>
              <button className="btn btn-primary" onClick={handleApply}>
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilterPanel;
