import React from 'react';
import './Clients.css';

const Clients = () => {
  const clients = [
    { name: 'JV GLOBAL' },
    { name: 'Bapuji B School' },
    { name: 'Spardha Mitra' },
    { name: 'Siva Academy' },
    { name: 'Awanthi Classes' },
    { name: 'Skillhacc' },
  ];

  return (
    <div className="clients-section">
      <h2>OUR VALUABLE CLIENTS</h2>
      <div className="clients-logos">
        {clients.map((client, index) => (
          <div key={index} className="client-logo">
            <span>{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;

  