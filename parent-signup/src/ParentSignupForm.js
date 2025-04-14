import React, { useState } from 'react';
import './App.css'; // Import the CSS file

function ParentSignupForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form
  const validateForm = () => {
    let newErrors = {};
    if (!formData.studentName) newErrors.studentName = 'Student name is required';
    if (!formData.parentName) newErrors.parentName = 'Parent name is required';
    if (!formData.phoneNumber.match(/^[0-9]{10}$/)) newErrors.phoneNumber = 'Phone number must be 10 digits';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      console.log(formData);
    }
  };

  return (
    <div className="form-container">
      <h2>Parent Signup Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            name="studentName"
            value={formData.studentName}
            onChange={handleChange}
          />
          {errors.studentName && <span className="error">{errors.studentName}</span>}
        </div>

        <div className="form-group">
          <label>Parent Name:</label>
          <input
            type="text"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
          />
          {errors.parentName && <span className="error">{errors.parentName}</span>}
        </div>

        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default ParentSignupForm;
