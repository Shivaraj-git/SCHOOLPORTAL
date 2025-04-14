import React from 'react';
import '../App.css';

function Class() {
  const classDetails = {
    className: '12 CS',
    totalStudents: 42,
    teacher: 'Mr. Jeffrey',
    section: 'CS-A'
  };

  return (
    <div className="card">
      <h2>Class Info</h2>
      <p><strong>Class Name:</strong> {classDetails.className}</p>
      <p><strong>Total Students:</strong> {classDetails.totalStudents}</p>
      <p><strong>Teacher:</strong> {classDetails.teacher}</p>
      <p><strong>Section:</strong> {classDetails.section}</p>
    </div>
  );
}

export default Class;
