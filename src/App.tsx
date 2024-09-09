import React, { useState } from 'react';
import Surface from './component/Surface';

function App() {
  const [content, setContent] = useState('Default Content');

  const handleChangeContent = () => {
    setContent(content === 'Default Content' ? 'Updated Content' : 'Default Content');
  };

  return (
    <div className="container mt-5">
      <h1>Surface Component Example</h1>
      <button className="btn btn-primary mb-3" onClick={handleChangeContent}>
        Toggle Content
      </button>
      <Surface
        color="lightblue"
        width="300px"
        height="200px"
      >
        {content}
      </Surface>
    </div>
  );
}

export default App;
