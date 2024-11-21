function inputNumber() {
  let gameInput = document.getElementById("gameInput").value;
  if (gameInput == "1") {
    console.log("게임 시작");
    //게임 시작시 실행할 함수
  } else if (gameInput == "9") {
    console.log("게임 종료");
  } else {
    alert("1 또는 9를 입력하세요");
  }
}
