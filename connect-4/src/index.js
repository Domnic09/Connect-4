import React from 'react';
import ReactDOM from 'react-dom/client';
import Gameboard from './Components/GameBoard'; 
import GameCircle from './Components/GameCircle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <Gameboard />,
    <GameCircle />,
    document.getElementById('root')
);


