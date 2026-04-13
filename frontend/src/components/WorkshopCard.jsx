import React from 'react';

const WorkshopCard = ({ workshop, onViewDetails }) => {
  const getBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'badge-success';
      case 'proposed':
        return 'badge-warning';
      case 'completed':
        return 'badge-info';
      default:
        return 'badge-secondary';
    }
  };

  const getAccentColor = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'var(--color-success)';
      case 'proposed':
        return 'var(--color-warning)';
      case 'completed':
        return 'var(--color-info)';
      default:
        return 'var(--color-secondary)';
    }
  };

  const getCTAText = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'Register';
      case 'proposed':
        return 'View Details';
      case 'completed':
        return 'View Recording';
      default:
        return 'View Details';
    }
  };

  const getCTAClass = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'btn-primary';
      case 'proposed':
        return 'btn-secondary';
      case 'completed':
        return 'btn-secondary';
      default:
        return 'btn-secondary';
    }
  };

  return (
    <div className="card workshop-card">
      <div className="workshop-accent-strip" style={{ backgroundColor: getAccentColor(workshop.status) }}></div>
      <div className="card-body">
        <div className="workshop-card-header">
          <h3 className="workshop-title">{workshop.workshopType}</h3>
          <span className={`badge ${getBadgeClass(workshop.status)}`}>
            {workshop.status}
          </span>
        </div>

        <div className="workshop-details">
          <div className="workshop-detail-item">
            <span className="detail-label">Date</span>
            <span className="detail-value">{workshop.date}</span>
          </div>

          <div className="workshop-detail-item">
            <span className="detail-label">Instructor</span>
            <span className="detail-value">{workshop.instructor}</span>
          </div>

          <div className="workshop-detail-item">
            <span className="detail-label">Institute</span>
            <span className="detail-value">{workshop.institute}</span>
          </div>

          <div className="workshop-detail-item">
            <span className="detail-label">Coordinator</span>
            <span className="detail-value">{workshop.coordinator}</span>
          </div>
        </div>

        <div className="workshop-card-footer">
          <button className={`btn ${getCTAClass(workshop.status)} btn-sm`} onClick={() => onViewDetails(workshop)}>
            {getCTAText(workshop.status)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
