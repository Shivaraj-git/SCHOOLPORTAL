import React from 'react';
import '../App.css';

function Student() {
  const student = {
    name: 'Shivaraj',
    age: 17,
    grade: '12th',
    school: 'Mahatma montessori School'
  };

  return (
    <div className="card">
      <h2>Student Info</h2>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Age:</strong> {student.age}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
      <p><strong>School:</strong> {student.school}</p>
    </div>
  );
}

export default Student;
