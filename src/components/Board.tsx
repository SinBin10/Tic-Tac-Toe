import Square from "./Square";
import { useState } from "react";

function Board() {
  const[value, setValue] = useState('');
  function handleclick(){
    if(value === '' || value === 'O')
    setValue('X');
    else
    setValue('O');
  }
  return (
    <>
      <div className="board-row">
        <Square board={value} handleClick={handleclick}/>
        <Square board={value} handleClick={handleclick}/>
        <Square board={value} handleClick={handleclick}/>
      </div>
      <div className="board-row">
        <Square board={value} handleClick={handleclick}/>
        <Square board={value} handleClick={handleclick}/>
        <Square board={value} handleClick={handleclick}/>
      </div>
      <div className="board-row">
        <Square board={value} handleClick={handleclick}/>
        <Square board={value} handleClick={handleclick}/>
        <Square board={value} handleClick={handleclick}/>
      </div>
    </>
  );
}

export default Board;
