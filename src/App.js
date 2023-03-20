import {useState} from "react"
import './App.css';
import Box from './component/Box';

// 1. 박스 2개(타이틀(하나는 유저, 하나는 컴퓨터), 사진 정보, 결과)
// 2. 가위바위보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3 4의 결과를 기반으로 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다. (이기면-초록, 지면-빨강 비기면-검정)

const choice = {
  rock : {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day.jpg",
  },
  scissor : {
    name: "Scissors",
    img: "http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTPrc5SXM6rvy7Nc1N9u8oXi9_yL3m2oEqHCfE6t_EUwWJ9zquoE6nJfvKj8B6m3gHQvFPtoOa55-r7gUoqgvo",
  },
  paper : {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  }
}

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("")
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice]);
    // 컴퓨터가 랜덤선택하는 함수
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  };

  const judgement = (user, computer) =>{
    console.log("user", user, "computer", computer)

    // user == computer tie
    // user == rock, computer == scissors -> user 승
    // user == "rock", computer == paper user 패
    // user == "scissors", computer == paper user 승
    // user == "scissors", computer == rock user 패
    // user == "paper", computer == rock user 패
    // user == "paper", computer == scissors user 패

    if(user.name == computer.name){
      return "tie"
    }else if(user.name == "Rock") return computer.name == "Scissors"?"win":"lose"
    else if(user.name == "Scissors") return computer.name == "Paper"?"win":"lose"
    else if(user.name == "Paper") return computer.name == "Rock"?"win":"lose"

  }

  const randomChoice =()=>{
    let itemArray = Object.keys(choice); // 객체에 키값만 뽑아서 어레이로 만들어주는 함수
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  }


  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result = {result} />
        <Box title="Computer" item={computerSelect} result = {result}/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissor")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
};

export default App;
