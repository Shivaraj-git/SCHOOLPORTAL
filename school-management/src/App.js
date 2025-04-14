import React from 'react';
import Student from './components/Student';
import Teacher from './components/Teacher';
import Class from './components/Class';

function App() {
  return (
    <div className="App">
      <h1>SCHOOL MANAGEMENT APPLICATION</h1>
      <Student />
      <Teacher />
      <Class />
    </div>
  );
}

export default App;
