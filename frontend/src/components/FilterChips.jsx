import React from 'react';

const FilterChips = ({ filters, onRemoveFilter, onClearAll }) => {
  const getFilterLabel = (key, value) => {
    switch (key) {
      case 'workshopType':
        return `Type: ${value}`;
      case 'state':
        return `State: ${value}`;
      case 'status':
        return `Status: ${value}`;
      case 'fromDate':
        return `From: ${value}`;
      case 'toDate':
        return `To: ${value}`;
      default:
        return value;
    }
  };

  const activeFilters = Object.entries(filters).filter(([_, value]) => value);

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div className="filter-chips">
      <div className="filter-chips-container">
        {activeFilters.map(([key, value]) => (
          <div key={key} className="filter-chip">
            <span className="filter-chip-text">
              {getFilterLabel(key, value)}
            </span>
            <button
              className="filter-chip-remove"
              onClick={() => onRemoveFilter(key)}
              aria-label={`Remove ${key} filter`}
            >
              <span className="remove-icon">close</span>
            </button>
          </div>
        ))}
      </div>
      {activeFilters.length > 1 && (
        <button
          className="btn btn-sm btn-outline"
          onClick={onClearAll}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default FilterChips;
