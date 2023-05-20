let login = prompt("Кто там", "");
let password;

if (login == "Админ") {
  password = prompt("Пароль", "");
} else if (!login) {
  alert("Отмена");
} else {
  alert("Не знаю");
}

if (password == "Я главный") {
  alert ("Hello");
} else if (!password) {
  alert("Отмена");
} else {
  alert("Неверный");
}
