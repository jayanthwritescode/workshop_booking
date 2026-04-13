import React from 'react';

const WorkshopCardSkeleton = () => {
  return (
    <div className="workshop-card card skeleton">
      <div className="card-body">
        <div className="workshop-card-header">
          <div className="skeleton-title"></div>
          <div className="skeleton-badge"></div>
        </div>

        <div className="workshop-details">
          <div className="workshop-detail-item">
            <div className="skeleton-label"></div>
            <div className="skeleton-value"></div>
          </div>
          <div className="workshop-detail-item">
            <div className="skeleton-label"></div>
            <div className="skeleton-value"></div>
          </div>
          <div className="workshop-detail-item">
            <div className="skeleton-label"></div>
            <div className="skeleton-value"></div>
          </div>
          <div className="workshop-detail-item">
            <div className="skeleton-label"></div>
            <div className="skeleton-value"></div>
          </div>
        </div>

        <div className="workshop-card-footer">
          <div className="skeleton-button"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCardSkeleton;
