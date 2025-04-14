import React from "react";
import StudentList from "./components/StudentList";
import "./styles/global.scss"; 

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">React Student List with Sass</h1>
      <StudentList />
    </div>
  );
};

export default App;
