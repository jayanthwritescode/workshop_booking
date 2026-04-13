import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  // Mock user data - would come from API
  const userWorkshops = {
    registered: [
      {
        id: 1,
        workshopType: 'Python for Scientific Computing',
        date: '2024-02-15',
        institute: 'IIT Bombay',
        instructor: 'Jane Smith',
        status: 'Accepted',
        seatsTotal: 50,
        seatsAvailable: 23,
      },
      {
        id: 4,
        workshopType: 'DWSIM Process Simulation',
        date: '2024-03-05',
        institute: 'IIT Kharagpur',
        instructor: 'Frank Miller',
        status: 'Accepted',
        seatsTotal: 40,
        seatsAvailable: 12,
      },
    ],
    waitlisted: [
      {
        id: 2,
        workshopType: 'Scilab Basics',
        date: '2024-02-20',
        institute: 'IIT Delhi',
        instructor: 'Bob Wilson',
        status: 'Proposed',
        seatsTotal: 50,
        seatsAvailable: 0,
      },
    ],
    past: [
      {
        id: 3,
        workshopType: 'OpenFOAM CFD',
        date: '2024-01-10',
        institute: 'IIT Madras',
        instructor: 'Diana Prince',
        status: 'Completed',
        seatsTotal: 45,
        seatsAvailable: 0,
      },
    ],
  };

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

  const WorkshopRow = ({ workshop, isPast }) => (
    <div className="dashboard-workshop-row">
      <div className="dashboard-workshop-accent" style={{ backgroundColor: getAccentColor(workshop.status) }}></div>
      <div className="dashboard-workshop-info">
        <h4 className="dashboard-workshop-title">{workshop.workshopType}</h4>
        <div className="dashboard-workshop-meta">
          <span className="meta-item">
            <span className="meta-label">Date</span>
            <span className="meta-value">{workshop.date}</span>
          </span>
          <span className="meta-item">
            <span className="meta-label">Institute</span>
            <span className="meta-value">{workshop.institute}</span>
          </span>
          <span className="meta-item">
            <span className="meta-label">Instructor</span>
            <span className="meta-value">{workshop.instructor}</span>
          </span>
        </div>
      </div>
      <div className="dashboard-workshop-actions">
        <span className={`badge ${getBadgeClass(workshop.status)}`}>
          {workshop.status}
        </span>
        <button 
          className="btn btn-secondary btn-sm"
          onClick={() => navigate(`/workshops/${workshop.id}`)}
        >
          View Details
        </button>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="mb-4">
        <h1>Dashboard</h1>
        <p className="text-muted">
          View your registered workshops, waitlist status, and past workshops.
        </p>
      </div>

      {/* Dashboard Stats */}
      <div className="workshop-cards-grid mb-4">
        <div className="card">
          <div className="card-body">
            <div className="detail-label">Registered</div>
            <div className="detail-value" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-success)' }}>
              {userWorkshops.registered.length}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="detail-label">Waitlisted</div>
            <div className="detail-value" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-warning)' }}>
              {userWorkshops.waitlisted.length}
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="detail-label">Past Workshops</div>
            <div className="detail-value" style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--color-info)' }}>
              {userWorkshops.past.length}
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Workshops */}
      <div className="card mb-4">
        <div className="card-header">
          <h2>Upcoming Workshops</h2>
        </div>
        <div className="card-body">
          {userWorkshops.registered.length === 0 && userWorkshops.waitlisted.length === 0 ? (
            <EmptyState
              title="No upcoming workshops"
              message="You haven't registered for any upcoming workshops yet."
              icon="event"
            />
          ) : (
            <div className="dashboard-workshop-list">
              {userWorkshops.registered.map(workshop => (
                <WorkshopRow key={workshop.id} workshop={workshop} isPast={false} />
              ))}
              {userWorkshops.waitlisted.map(workshop => (
                <WorkshopRow key={workshop.id} workshop={workshop} isPast={false} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Past Workshops */}
      <div className="card">
        <div className="card-header">
          <h2>Past Workshops</h2>
        </div>
        <div className="card-body">
          {userWorkshops.past.length === 0 ? (
            <EmptyState
              title="No past workshops"
              message="You haven't attended any workshops yet."
              icon="history"
            />
          ) : (
            <div className="dashboard-workshop-list">
              {userWorkshops.past.map(workshop => (
                <WorkshopRow key={workshop.id} workshop={workshop} isPast={true} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
