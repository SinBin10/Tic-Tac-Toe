import Square from "./Square";
import { useState } from "react";

function Board() {
  const [char,setChar] = useState(Array(9).fill(''));
  const [sign,setSign] = useState(true);
  function onsquareclick(i: number){
    if(char[i] || calculateWinner(char))
    return;
    const nextSquares = char.slice();
    if(sign){
      nextSquares[i] = 'X';
    }
    else{
      nextSquares[i] = 'O';
    }
    setChar(nextSquares);
    setSign(!sign);
  }

  const winner = calculateWinner(char);
  let status;
  if(winner)
    status = 'Winner: '+ winner;
  else
    status = 'Next Player: '+ (sign ? 'X' : 'O');
  return (
    <>
      <div>{status}</div>
      <div className="board-row">
        <Square state={char[0]} handleclick={()=>onsquareclick(0)}/>
        <Square state={char[1]} handleclick={()=>onsquareclick(1)}/>
        <Square state={char[2]} handleclick={()=>onsquareclick(2)}/>
      </div>
      <div className="board-row">
        <Square state={char[3]} handleclick={()=>onsquareclick(3)}/>
        <Square state={char[4]} handleclick={()=>onsquareclick(4)}/>
        <Square state={char[5]} handleclick={()=>onsquareclick(5)}/>
      </div>
      <div className="board-row">
        <Square state={char[6]} handleclick={()=>onsquareclick(6)}/>
        <Square state={char[7]} handleclick={()=>onsquareclick(7)}/>
        <Square state={char[8]} handleclick={()=>onsquareclick(8)}/>
      </div>
    </>
  );
}

function calculateWinner(squares: any[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/*function calculateWinner(char){
  const lines = [
    0,1,2,
    3,4,5,
    6,7,8,
    0,3,6,
    1,4,7,
    2,5,8,
    0,4,8,
    2,4,6
  ];
  let i = 0;
  while(i<lines.length){
    if(char[lines[i]] === char[lines[++i]] && char[lines[i]] === char[lines[++i]])
      return char[lines[i]];
  }
  if(i === lines.length)
    return null;
}*/

export default Board;
