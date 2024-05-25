import Square from "./Square";
import { useState } from "react";

function Board() {
  const [char,setChar] = useState(Array(9).fill(''));
  function onsquareclick(){
    console.log(char);
    char[0] = 'X';
    setChar(char[0]);
  }
  return (
    <>
      <div className="board-row">
        <Square state={char[0]} handleclick={onsquareclick}/>
        <Square state={char[1]} handleclick={onsquareclick}/>
        <Square state={char[2]} handleclick={onsquareclick}/>
      </div>
      <div className="board-row">
        <Square state={char[3]} handleclick={onsquareclick}/>
        <Square state={char[4]} handleclick={onsquareclick}/>
        <Square state={char[5]} handleclick={onsquareclick}/>
      </div>
      <div className="board-row">
        <Square state={char[6]} handleclick={onsquareclick}/>
        <Square state={char[7]} handleclick={onsquareclick}/>
        <Square state={char[8]} handleclick={onsquareclick}/>
      </div>
    </>
  );
}

export default Board;
