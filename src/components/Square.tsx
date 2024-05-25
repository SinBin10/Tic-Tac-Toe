interface Props{
  state: String;
  handleclick: ()=>void;
}

function Square({state,handleclick}:Props) {
  return (<button className="square" onClick={handleclick}>{state}</button>);
}

export default Square;
