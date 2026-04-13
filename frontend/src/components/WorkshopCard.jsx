import React from 'react';

const WorkshopCard = ({ workshop, onViewDetails, onRegister }) => {
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'status-accepted';
      case 'proposed':
        return 'status-proposed';
      case 'completed':
        return 'status-completed';
      default:
        return 'status-accepted';
    }
  };

  const getBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'badge-accepted';
      case 'proposed':
        return 'badge-proposed';
      case 'completed':
        return 'badge-completed';
      default:
        return 'badge-accepted';
    }
  };

  const getCTAText = (status) => {
    if (status.toLowerCase() === 'completed') {
      return 'View Recording';
    }
    return 'Register';
  };

  const getSkillLevelClass = (skillLevel) => {
    switch (skillLevel?.toLowerCase()) {
      case 'beginner':
        return 'skill-beginner';
      case 'intermediate':
        return 'skill-intermediate';
      case 'advanced':
        return 'skill-advanced';
      default:
        return 'skill-intermediate';
    }
  };

  const getSeatAvailabilityClass = (seatsAvailable, seatsTotal) => {
    if (!seatsAvailable || !seatsTotal) return '';
    const percentage = (seatsAvailable / seatsTotal) * 100;
    return percentage < 20 ? 'seats-limited' : 'seats-available';
  };

  return (
    <div className={`card workshop-card ${getStatusClass(workshop.status)}`}>
      <div className="card-body">
        <div className="workshop-card-header">
          <h3 className="workshop-title">{workshop.workshopType}</h3>
          <span className={`badge ${getBadgeClass(workshop.status)}`}>
            {workshop.status}
          </span>
        </div>

        {workshop.skillLevel && (
          <div className="workshop-skill-level">
            <span className={`skill-tag ${getSkillLevelClass(workshop.skillLevel)}`}>
              {workshop.skillLevel}
            </span>
          </div>
        )}

        <div className="workshop-details">
          <div className="workshop-detail-row">
            <span className="detail-label">Date</span>
            <span className="detail-value">{workshop.date}</span>
          </div>

          <div className="workshop-detail-row">
            <span className="detail-label">Instructor</span>
            <span className="detail-value">{workshop.instructor}</span>
          </div>

          <div className="workshop-detail-row">
            <span className="detail-label">Institute</span>
            <span className="detail-value">{workshop.institute}</span>
          </div>

          <div className="workshop-detail-row">
            <span className="detail-label">Coordinator</span>
            <span className="detail-value">{workshop.coordinator}</span>
          </div>

          {workshop.seatsAvailable !== undefined && workshop.status.toLowerCase() === 'accepted' && (
            <div className="workshop-detail-row">
              <span className="detail-label">Seats</span>
              <span className={`detail-value ${getSeatAvailabilityClass(workshop.seatsAvailable, workshop.seatsTotal)}`}>
                {workshop.seatsAvailable} available
              </span>
            </div>
          )}
        </div>

        <div className="workshop-card-footer">
          <button className="btn btn-primary" onClick={() => onRegister && onRegister(workshop)}>
            {getCTAText(workshop.status)}
          </button>
          <button className="btn btn-ghost" onClick={() => onViewDetails(workshop)}>
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkshopCard;
