import React from "react";
import "../styles/StudentList.css"; 

const students = [
  { id: 1, name: "Shivaraj", department: "Computer Science" },
  { id: 2, name: "Muthukkumaran", department: "Electronics" },
  { id: 3, name: "Jeffrey winston", department: "Mechanical" },
  { id: 4, name: "Leo dass", department: "Civil" },
];

const StudentList = () => {
  return (
    <div className="student-list-container">
      <h2 className="student-list-title">Student List</h2>
      <ul className="student-list">
        {students.map((student) => (
          <li key={student.id} className="student-item">
            <span className="student-name">{student.name}</span> - {student.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
