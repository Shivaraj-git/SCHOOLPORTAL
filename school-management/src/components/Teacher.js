import React from 'react';
import '../App.css';

function Teacher() {
  const teacher = {
    name: 'Mr. Muthukkumaran',
    subject: 'Mathematics',
    experience: '5 years',
    school: 'Mahatma montessori School'
  };

  return (
    <div className="card">
      <h2>Teacher Info</h2>
      <p><strong>Name:</strong> {teacher.name}</p>
      <p><strong>Subject:</strong> {teacher.subject}</p>
      <p><strong>Experience:</strong> {teacher.experience}</p>
      <p><strong>School:</strong> {teacher.school}</p>
    </div>
  );
}

export default Teacher;
