import React from "react";
import "../styles/StudentList.scss";

const students = [
  { id: 1, name: "John Doe", department: "Computer Science" },
  { id: 2, name: "Jane Smith", department: "Electronics" },
  { id: 3, name: "Alice Johnson", department: "Mechanical" },
  { id: 4, name: "Bob Brown", department: "Civil" },
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
