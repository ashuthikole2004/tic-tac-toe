let btn = document.querySelectorAll(".btns");
let reset = document.querySelector(".reset");
console.log(btn);
let turn = true;
let count = 0;
const con = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// console.log(con);

btn.forEach((btns) => {
  btns.addEventListener("click", () => {
    // console.log("Button clicked");
    if (turn === true) {
      btns.innerText = "O";
      btns.style.color = "red";
      turn = false;
      count++;
    } else {
      btns.innerText = "X";
      btns.style.color = "red";
      turn = true;
      count++;
    }
    btns.disabled = true;
    winGame();
    loseGame();
  });
});

let para = document.querySelector("#para1");
const showWinner = (winner) => {
  para.innerText = `Congratulations, Winner is ${winner}`;
  para.classList.remove("hide");
};

const lose = () => {
  para.innerText = `😔,You Lose`;
  para.classList.remove("hide");
};

const disableBox = () => {
  for (btns of btn) {
    btns.disabled = true;
  }
};

const enableBox = () => {
  for (btns of btn) {
    btns.disabled = false;
    btns.innerText = " ";
  }
};

const winGame = () => {
  for (let pattern of con) {
    let pos1 = btn[pattern[0]].innerText;
    let pos2 = btn[pattern[1]].innerText;
    let pos3 = btn[pattern[2]].innerText;
    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos2 === pos3) {
        console.log("winner", pos1);
        showWinner(pos1);
        disableBox();
        return true;
      }
    }
  }
};

const loseGame = () => {
  let winer = winGame();
  if (count == 9 && !winer) {
    // console.log("You lose");
    lose();
  }
};

reset.addEventListener("click", () => {
  turn = true;
  count = 0;
  enableBox();
  para.classList.add("hide");
});
