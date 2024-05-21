interface Props{
    board: String;
    handleClick: ()=>void;
}

function Square({board, handleClick}: Props) {
  return (<button className="square" onClick={()=>{handleClick}}>{board}</button>);
}

export default Square;
