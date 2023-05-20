const QUESTION = "Введите число";
const DEFAULT = "0";
let userAnswer = prompt(QUESTION, DEFAULT);
if (userAnswer > 0) {
  alert(1);
} else if (userAnswer < 0) {
  alert(-1);
} else if (userAnswer === "0") {
  alert(0);
} else {
  alert("puk");
}
