import React from 'react';
import GameCircle from './GameCircle';

const Gameboard = () => {
//   const handleClick = () => {
//     alert('on click');
//   };

  return (
    <div>
      <GameCircle id={1} value={5} >
        Red
      </GameCircle>
      <GameCircle id={2}  >
        Blue
      </GameCircle>
      <GameCircle id={3}  >
        Red
        </GameCircle>
      <GameCircle id={4}  >
        Blue
      </GameCircle>
      <GameCircle id={5}  >
        Red
        </GameCircle>
      <GameCircle id={6} >
        Blue
        </GameCircle>
      <GameCircle id={7}  >
        Red
        </GameCircle>
      <GameCircle id={8}  >
        Blue
        </GameCircle>
    </div>
  );
};

export default Gameboard;
