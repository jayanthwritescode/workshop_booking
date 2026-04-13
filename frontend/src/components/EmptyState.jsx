import React from 'react';

const EmptyState = React.memo(({ 
  title = "No workshops found", 
  message = "No workshops match your current search or filter criteria. Try clearing filters or adjusting your search terms.",
  actionText = "Clear Filters",
  onAction
}) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-message">{message}</p>
      {onAction && (
        <button className="btn btn-primary" onClick={onAction}>
          {actionText}
        </button>
      )}
    </div>
  );
});

export default EmptyState;
