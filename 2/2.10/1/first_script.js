const QUESTION = "Какое официальное название JavaScript";
const OFFICIAL_NAME = "ECMAScript";
const DEFAULT = "Введите ответ";
let userAnswer = prompt(QUESTION, DEFAULT);
if (userAnswer == OFFICIAL_NAME) {
  alert("Верно");
} else {
  alert("Не знаете? ECMAScript!");
}
