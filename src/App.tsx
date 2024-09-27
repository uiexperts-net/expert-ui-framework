import React from 'react';
import ContactDetail from './Components/Contactdetail';

function App() {
  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f5f5f5' }}>
      <ContactDetail name="Priyadharshini T" phoneNumber="9344334333" />
    </div>
  );
}

export default App;
