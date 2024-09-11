import React from 'react';
import './App.css';
import TableComponent from './component/TableComponent';
 // Import the TableComponent

function App() {
  // Sample data to display in the table
  const headers = ['ID', 'Name', 'Age'];
  const data = [
    [1, 'John Doe', 28],
    [2, 'Jane Smith', 32],
    [3, 'Mark Taylor', 25],
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Table Component Demo</h1>
        {/* Render the TableComponent with sample headers and data */}
        <TableComponent title="Employee Data" headers={headers} data={data} />
      </header>
    </div>
  );
}

export default App;
