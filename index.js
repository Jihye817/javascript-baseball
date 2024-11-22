let isGaming = false;
let answerNumber = "";

function inputNumber() {
  let gameInput = document.getElementById("gameInput").value;

  if (!isGaming) {
    if (gameInput == "1") {
      console.log("게임 시작");
      isGaming = true;
      //게임 시작시 실행할 함수
    } else if (gameInput == "9") {
      console.log("게임 종료");
      isGaming = false;
    } else {
      alert("1 또는 9를 입력하세요");
    }
  } else {
    if (gameInput.length == 3) {
      //게임 진행
    } else if (gameInput == 9) {
      console.log("게임 종료");
      isGaming = false;
    } else {
      alert("3자리 숫자를 입력해주세요");
    }
  }
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
  console.log(answerNumber);
}

randomNumber();
