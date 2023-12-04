import { useState } from 'react';
import './container.css';

export const Container = ({ children }) => {

  const [list, setList] = useState([]);

  return (
    <div className="app-container">{children}</div>
  );
};
