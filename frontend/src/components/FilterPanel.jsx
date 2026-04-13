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
                <h4>Software</h4>
                <div className="form-group">
                  <label className="form-label">Tool</label>
                  <select
                    className="form-control"
                    value={localFilters.workshopType}
                    onChange={(e) => handleChange('workshopType', e.target.value)}
                  >
                    <option value="">All Tools</option>
                    <option value="python">Python</option>
                    <option value="scilab">Scilab</option>
                    <option value="openfoam">OpenFOAM</option>
                    <option value="dwsim">DWSIM</option>
                    <option value="openmodelica">OpenModelica</option>
                    <option value="eos">eSim</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Status</label>
                  <select
                    className="form-control"
                    value={localFilters.status}
                    onChange={(e) => handleChange('status', e.target.value)}
                  >
                    <option value="">All Status</option>
                    <option value="accepted">Accepted</option>
                    <option value="proposed">Proposed</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div className="filter-section">
                <h4>Location</h4>
                <div className="form-group">
                  <label className="form-label">Institute</label>
                  <select
                    className="form-control"
                    value={localFilters.institute}
                    onChange={(e) => handleChange('institute', e.target.value)}
                  >
                    <option value="">All Institutes</option>
                    <option value="iit-bombay">IIT Bombay</option>
                    <option value="iit-delhi">IIT Delhi</option>
                    <option value="iit-madras">IIT Madras</option>
                    <option value="iit-kharagpur">IIT Kharagpur</option>
                    <option value="iit-kanpur">IIT Kanpur</option>
                    <option value="iit-roorkee">IIT Roorkee</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">State</label>
                  <select
                    className="form-control"
                    value={localFilters.state}
                    onChange={(e) => handleChange('state', e.target.value)}
                  >
                    <option value="">All States</option>
                    <option value="andhra-pradesh">Andhra Pradesh</option>
                    <option value="bihar">Bihar</option>
                    <option value="delhi">Delhi</option>
                    <option value="karnataka">Karnataka</option>
                    <option value="maharashtra">Maharashtra</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="telangana">Telangana</option>
                    <option value="uttar-pradesh">Uttar Pradesh</option>
                    <option value="west-bengal">West Bengal</option>
                  </select>
                </div>
              </div>

              <div className="filter-section">
                <h4>Date Range</h4>
                <div className="form-group">
                  <label className="form-label">From</label>
                  <input
                    type="date"
                    className="form-control"
                    value={localFilters.fromDate}
                    onChange={(e) => handleChange('fromDate', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">To</label>
                  <input
                    type="date"
                    className="form-control"
                    value={localFilters.toDate}
                    onChange={(e) => handleChange('toDate', e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="filter-footer">
              <button className="btn btn-outline" onClick={handleClear}>
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
