import React from 'react';

const WorkshopCard = ({ workshop, onViewDetails }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'success';
      case 'proposed':
        return 'warning';
      case 'completed':
        return 'info';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="workshop-card card">
      <div className="card-body">
        <div className="workshop-card-header">
          <h3 className="workshop-title">{workshop.workshopType}</h3>
          <span className={`badge badge-${getStatusColor(workshop.status)}`}>
            {workshop.status}
          </span>
        </div>

        <div className="workshop-details">
          <div className="workshop-detail-item">
            <span className="detail-label">Date</span>
            <span className="detail-value">{workshop.date}</span>
          </div>
          <div className="workshop-detail-item">
            <span className="detail-label">Coordinator</span>
            <span className="detail-value">{workshop.coordinator}</span>
          </div>
          <div className="workshop-detail-item">
            <span className="detail-label">Institute</span>
            <span className="detail-value">{workshop.institute}</span>
          </div>
          <div className="workshop-detail-item">
            <span className="detail-label">Instructor</span>
            <span className="detail-value">{workshop.instructor}</span>
          </div>
        </div>

        <div className="workshop-card-footer">
          <button className="btn btn-primary btn-sm" onClick={() => onViewDetails(workshop)}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
