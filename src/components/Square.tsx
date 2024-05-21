interface Props{
    value: String;
}

function Square({value}: Props) {
    function handleClick(){
        console.log('clicked');
    }
  return <button className="square" onClick={handleClick}>{value}</button>;
}

export default Square;
