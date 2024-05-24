import { useState } from "react";

function Square() {
  const[value, setValue] = useState('');
  function handleclick(){
      setValue('X');
    }
  return (<button className="square" onClick={handleclick}>{value}</button>);
}

export default Square;
