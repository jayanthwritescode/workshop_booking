import React from 'react';

const EmptyState = ({ 
  title = "No results found", 
  message = "Try adjusting your search or filters to find what you're looking for",
  actionText = "Clear Filters",
  onAction,
  icon = "search_off"
}) => {
  return (
    <div className="empty-state">
      <div className="empty-state-icon">
        <span className="icon">{icon}</span>
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
};

export default EmptyState;
