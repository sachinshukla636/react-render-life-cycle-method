import React from 'react';
import './style.css';
import User from './User';
export default function App() {
  const [name, setName] = React.useState('Sachin');
  return (
    <div>
      <h1>render method in React</h1>
      <User name={name} />
      <button onClick={() => setName('Shukla')}>Update Name</button>
    </div>
  );
}
