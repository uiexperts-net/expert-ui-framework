import React from 'react';
import List from './components/List.tsx';

function App() {
  const items = ['Apple', 'Banana', 'Cherry'];

  const handleItemClick = (item: string) => {
    alert(`You clicked on ${item}`);
  };

  return (
    <div>
      <h1>My List</h1>
      <List items={items} onItemClick={handleItemClick} />
    </div>
  );
}

export default App;
