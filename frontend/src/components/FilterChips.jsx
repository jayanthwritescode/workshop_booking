import React from 'react';

const FilterChips = ({ filters, onRemoveFilter, onClearAll }) => {
  const getFilterLabel = (key, value) => {
    switch (key) {
      case 'workshopType':
        return `Type: ${value}`;
      case 'status':
        return `Status: ${value}`;
      case 'institute':
        return `Institute: ${value}`;
      default:
        return `${key}: ${value}`;
    }
  };

  const activeFilters = Object.entries(filters).filter(([_, value]) => value);

  if (activeFilters.length === 0) {
    return null;
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
      {activeFilters.map(([key, value]) => {
        const label = getFilterLabel(key, value);
        return (
          <span
            key={key}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px',
              backgroundColor: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '4px',
              fontSize: '12px',
              color: '#333',
              fontWeight: '500'
            }}
          >
            {label}
            <button
              onClick={() => onRemoveFilter(key)}
              aria-label={`Remove ${key} filter`}
              type="button"
              style={{
                background: 'none',
                border: 'none',
                color: '#999',
                cursor: 'pointer',
                padding: '0',
                fontSize: '14px',
                lineHeight: '1',
                marginLeft: '4px'
              }}
            >
              ×
            </button>
          </span>
        );
      })}
      {activeFilters.length > 1 && (
        <button
          onClick={onClearAll}
          type="button"
          style={{
            padding: '4px 12px',
            backgroundColor: 'transparent',
            border: '1px solid #e0e0e0',
            borderRadius: '4px',
            fontSize: '12px',
            cursor: 'pointer'
          }}
        >
          Clear All
        </button>
      )}
    </div>
  );
};

export default FilterChips;
