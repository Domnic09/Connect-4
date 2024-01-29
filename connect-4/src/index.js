import React from 'react';
import ReactDOM from 'react-dom/client';
import Gameboard from './Components/GameBoard'; 
import GameCircle from './Components/GameCircle';

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <Gameboard />
  </React.StrictMode>,
  document.getElementById('root')
);



