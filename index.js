let isGaming = false;
let answerNumber = "";

function inputNumber() {
  let gameInput = document.getElementById("gameInput").value;

  if (!isGaming) {
    if (gameInput == "1") {
      gameStart();
    } else if (gameInput == "9") {
      gameStop();
    } else {
      alert("1 또는 9를 입력하세요");
    }
  } else {
    if (gameInput.length == 3) {
      checkNum(gameInput);
    } else if (gameInput == 9) {
      gameStop();
    } else {
      alert("3자리 숫자를 입력해주세요");
    }
  }
  document.getElementById("gameInput").value = "";
}

function gameStart() {
  isGaming = true;
  document.getElementById("gameTitle").innerHTML =
    "<div>게임이 진행중입니다. 3자리 숫자를 입력해주세요.</div>";
  randomNumber();
}

function gameStop() {
  isGaming = false;
  answerNumber = "";
  document.getElementById("gameTitle").innerHTML =
    "<div>게임을 새로 시작하려면 1, 종료하려면 9를 입력하세요</div>";
  document.getElementById("gameResult").innerHTML = "";
}

//랜덤 3자리 숫자를 뽑아주는 함수
function randomNumber() {
  let count = 0;
  for (let i = 0; ; i++) {
    let newNumber = Math.floor(Math.random() * 9) + 1;
    if (!answerNumber.includes(newNumber)) {
      answerNumber += newNumber;
      count++;
    }
    if (count == 3) break;
  }
}

//입력된 숫자를 체크하는 함수
function checkNum(gameInput) {
  let strike = 0;
  let ball = 0;
  let nothing = 0;

  if (gameInput.includes(0)) {
    alert("0은 입력 불가능합니다.");
    return;
  }

  let numberArr = gameInput.split("");
  let set = new Set(numberArr);
  if (numberArr.length != set.size) {
    alert("중복 숫자는 입력이 불가능합니다.");
    return;
  }

  if (answerNumber == gameInput) {
    alert("3개의 숫자를 모두 맞히셨습니다.");
    gameStop();
  } else {
    for (let i = 0; i < answerNumber.length; i++) {
      if (answerNumber[i] == gameInput[i]) {
        strike++;
      } else if (gameInput.includes(answerNumber[i])) {
        ball++;
      } else {
        nothing++;
      }
    }

    const innerHTML = `<span>입력 : ${gameInput}</span> 결과 : ${ball}볼 ${strike}스트라이크 ${nothing}낫싱`;
    const newDiv = document.createElement("div");
 
    newDiv.innerHTML = innerHTML;
    document.getElementById("gameResult").prepend(newDiv);
    document.getElementById("gameResult").prepend(newSpan);
  }
}
