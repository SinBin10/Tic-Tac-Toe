import Square from "./Square";
import { useState } from "react";

function Board() {
  const [char,setChar] = useState(Array(9).fill(''));
  const [sign,setSign] = useState(true);
  function onsquareclick(i: number){
    const nextSquares = char.slice();
    if(sign)
    nextSquares[i] = 'X';
    else
    nextSquares[i] = 'O';
    setChar(nextSquares);
    setSign(!sign);
  }
  return (
    <>
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

export default Board;
