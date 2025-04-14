import React from "react";
import StudentList from "./components/StudentList";

const App = () => {
  return (
    <div className="app-container">
      <h1 className="app-title">React Student List </h1>
      <StudentList />
    </div>
  );
};

export default App;
