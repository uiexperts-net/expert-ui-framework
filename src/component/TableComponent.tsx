import React from 'react';



export interface TableComponentProps {
  title: string;
  headers: string[];
  data: Array<Array<string | number>>;
}

const TableComponent: React.FC<TableComponentProps> = ({ title, headers, data }) => {
  return (
    <div className="table-component">
      <h3 className="table-component-title">{title}</h3>
      <div className="table-component-content">
        <table className="table">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
