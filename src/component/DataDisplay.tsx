import React from 'react';

export interface DataDisplayProps {
  title: string;
  data: string | number | Array<string | number>;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ title, data }) => {
  return (
    <div className="data-display">
      <h3 className="data-display-title">{title}</h3>
      <div className="data-display-content">
        {Array.isArray(data) ? (
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{data}</p>
        )}
      </div>
    </div>
  );
};

export default DataDisplay;
