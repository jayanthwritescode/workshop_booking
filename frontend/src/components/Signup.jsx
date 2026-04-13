import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    title: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    institute: '',
    department: '',
    location: '',
    state: '',
    howDidYouHear: '',
  });

  const titles = ['Prof.', 'Dr.', 'Shri', 'Smt', 'Ku', 'Mr.', 'Mrs.', 'Ms.'];

  const departments = [
    'Computer Science',
    'Information Technology',
    'Civil Engineering',
    'Electrical Engineering',
    'Mechanical Engineering',
    'Chemical Engineering',
    'Aerospace Engineering',
    'Biosciences and BioEngineering',
    'Electronics',
    'Energy Science and Engineering',
  ];

  const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Delhi',
    'Jammu and Kashmir',
    'Ladakh',
    'Lakshadweep',
    'Puducherry',
  ];

  const hearAboutUsOptions = [
    'FOSSEE website',
    'Google',
    'Social Media',
    'From other College',
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Validate username format
    const usernameRegex = /^[a-zA-Z0-9._]+$/;
    if (!usernameRegex.test(formData.username)) {
      alert('Username can only contain letters, digits, period, and underscore');
      return;
    }
    // Mock signup - would connect to backend API
    console.log('Signup attempt:', formData);
    // Redirect to login after successful signup
    navigate('/login');
  };

  return (
    <div className="auth-page">
      <div className="auth-container auth-container-large">
        <div className="auth-card">
          <div className="auth-header">
            <h1>Coordinator Registration</h1>
            <p className="text-muted">Create your account to get started</p>
          </div>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Letters, digits, period and underscore only"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <small className="form-text text-muted">Letters, digits, period and underscore only</small>
              </div>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="form-control"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Title</label>
                <select
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Title</option>
                  {titles.map((title) => (
                    <option key={title} value={title}>
                      {title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Institute</label>
              <input
                type="text"
                name="institute"
                className="form-control"
                placeholder="Please write full name of your Institute/Organization"
                value={formData.institute}
                onChange={handleChange}
                required
              />
              <small className="form-text text-muted">Please write full name of your Institute/Organization</small>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Department</label>
                <select
                  name="department"
                  className="form-control"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
                <small className="form-text text-muted">Department you work/study</small>
              </div>
              <div className="form-group">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  placeholder="Place/City"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
                <small className="form-text text-muted">Place/City</small>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">State</label>
                <select
                  name="state"
                  className="form-control"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select State</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">How did you hear about us?</label>
                <select
                  name="howDidYouHear"
                  className="form-control"
                  value={formData.howDidYouHear}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an option</option>
                  {hearAboutUsOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
          <div className="auth-footer">
            <p className="text-muted">
              Already have an account? <a href="/login" className="link">Sign In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
