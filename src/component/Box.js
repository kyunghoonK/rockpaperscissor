import React from 'react';

const Box = (props) => {
  let result;
  if (
    // 카드가 computer카드인가? && 비긴건 아닌가? && props.result에 값이 있는가?
    props.title === "Computer" &&
    props.result !== "tie" &&
    props.result !== "" 
  ){result = props.result === "win"?"lose":"win"}
  else{
    result = props.result;
  }
  if(props.title === "Computer"){
    console.log("computer", result);
  }

  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <h2>{props.item && props.item.name}</h2>
        <img className='item-img' src={props.item && props.item.img} />
        <h2>{result}</h2>
    </div>
  )
}

export default Box