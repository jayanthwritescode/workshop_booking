import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const WorkshopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [showReminderMessage, setShowReminderMessage] = useState(false);

  // Mock workshop data - would come from API
  const workshop = {
    id: id,
    workshopType: 'Python for Scientific Computing',
    description: 'This workshop covers the fundamentals of Python programming for scientific computing. Participants will learn to use NumPy, SciPy, Matplotlib, and Pandas for data analysis, visualization, and numerical computations.',
    prerequisites: 'Basic programming knowledge and familiarity with mathematical concepts. No prior Python experience required.',
    agenda: [
      'Day 1: Introduction to Python and Jupyter Notebooks',
      'Day 2: NumPy and Array Operations',
      'Day 3: SciPy for Scientific Computing',
      'Day 4: Matplotlib for Data Visualization',
      'Day 5: Pandas for Data Analysis',
    ],
    date: '2024-02-15',
    duration: '5 days',
    coordinator: 'John Doe',
    institute: 'IIT Bombay',
    instructor: 'Jane Smith',
    status: 'Accepted',
    seatsTotal: 50,
    seatsAvailable: 23,
    software: 'Python',
    skillLevel: 'Intermediate',
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

  const getAccentColor = (status) => {
    switch (status.toLowerCase()) {
      case 'accepted':
        return 'var(--color-accepted)';
      case 'proposed':
        return 'var(--color-proposed)';
      case 'completed':
        return 'var(--color-completed)';
      default:
        return 'var(--color-accepted)';
    }
  };

  const getCTAText = (status, seatsAvailable) => {
    if (status.toLowerCase() === 'completed') {
      return 'View Recording';
    }
    if (seatsAvailable === 0) {
      return 'Join Waitlist';
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

  const generateICSFile = () => {
    const date = new Date(workshop.date);
    const endDate = new Date(date);
    endDate.setDate(endDate.getDate() + 1); // Assume 1 day event

    const formatDate = (d) => {
      return d.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//FOSSEE Workshops//EN
BEGIN:VEVENT
UID:${workshop.id}@fossee.in
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(date)}
DTEND:${formatDate(endDate)}
SUMMARY:${workshop.workshopType}
DESCRIPTION:${workshop.description}\\n\\nLocation: ${workshop.institute}\\nInstructor: ${workshop.instructor}
LOCATION:${workshop.institute}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${workshop.workshopType.replace(/\s+/g, '_')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleRegister = () => {
    if (workshop.seatsAvailable > 0) {
      setShowRegistrationModal(true);
    } else {
      // Handle waitlist
      alert('Added to waitlist!');
    }
  };

  const handleConfirmRegistration = () => {
    setShowRegistrationModal(false);
    setShowReminderMessage(true);
    // Hide reminder message after 5 seconds
    setTimeout(() => setShowReminderMessage(false), 5000);
  };

  return (
    <div className="container">
      <button className="btn btn-secondary mb-4" onClick={() => navigate('/workshops')}>
        ← Back to Workshops
      </button>

      {showReminderMessage && (
        <div className="alert alert-success mb-4">
          Registration successful! You will receive an email reminder before the workshop.
        </div>
      )}

      <div className="workshop-detail-page">
        <div className="workshop-detail-header">
          <div className="workshop-detail-accent-strip" style={{ backgroundColor: getAccentColor(workshop.status) }}></div>
          <div className="workshop-detail-content">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h1 className="workshop-detail-title">{workshop.workshopType}</h1>
                {workshop.skillLevel && (
                  <span className={`skill-tag ${getSkillLevelClass(workshop.skillLevel)} mb-2`}>
                    {workshop.skillLevel}
                  </span>
                )}
              </div>
              <span className={`badge ${getBadgeClass(workshop.status)}`}>
                {workshop.status}
              </span>
            </div>

            <div className="workshop-detail-meta">
              <div className="meta-item">
                <span className="meta-label">Date</span>
                <span className="meta-value">{workshop.date}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Duration</span>
                <span className="meta-value">{workshop.duration}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Institute</span>
                <span className="meta-value">{workshop.institute}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Instructor</span>
                <span className="meta-value">{workshop.instructor}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Software</span>
                <span className="meta-value">{workshop.software}</span>
              </div>
              <div className="meta-item">
                <span className="meta-label">Seats</span>
                <span className="meta-value">{workshop.seatsAvailable} / {workshop.seatsTotal}</span>
              </div>
            </div>

            <button className="btn btn-secondary mt-3" onClick={generateICSFile}>
              Add to Calendar
            </button>
          </div>
        </div>

        <div className="workshop-detail-body">
          <div className="workshop-detail-main">
            <div className="card mb-4">
              <div className="card-header">
                <h2>Description</h2>
              </div>
              <div className="card-body">
                <p>{workshop.description}</p>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">
                <h2>Prerequisites</h2>
              </div>
              <div className="card-body">
                <p>{workshop.prerequisites}</p>
              </div>
            </div>

            <div className="card mb-4">
              <div className="card-header">
                <h2>Agenda</h2>
              </div>
              <div className="card-body">
                <ul className="agenda-list">
                  {workshop.agenda.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="workshop-detail-sidebar">
            <div className="card">
              <div className="card-body">
                <h3>Registration</h3>
                <p className="text-muted mb-3">
                  {workshop.seatsAvailable > 0 
                    ? `${workshop.seatsAvailable} seats available`
                    : 'Workshop is full'
                  }
                </p>
                <button 
                  className="btn btn-primary w-100" 
                  onClick={handleRegister}
                >
                  {getCTAText(workshop.status, workshop.seatsAvailable)}
                </button>
              </div>
            </div>

            <div className="card mt-4">
              <div className="card-body">
                <h3>Contact</h3>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-label">Coordinator</span>
                    <span className="contact-value">{workshop.coordinator}</span>
                  </div>
                  <div className="contact-item">
                    <span className="contact-label">Email</span>
                    <span className="contact-value">workshops@fossee.in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showRegistrationModal && (
        <div className="modal-overlay" onClick={() => setShowRegistrationModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Register for Workshop</h2>
              <button className="modal-close" onClick={() => setShowRegistrationModal(false)} aria-label="Close">
                <span className="close-icon">close</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input type="text" className="form-control" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label className="form-label">Institution</label>
                <input type="text" className="form-control" placeholder="Enter your institution" />
              </div>
              <div className="form-group">
                <label className="form-label">Department</label>
                <input type="text" className="form-control" placeholder="Enter your department" />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowRegistrationModal(false)}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={handleConfirmRegistration}>
                Confirm Registration
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkshopDetail;
