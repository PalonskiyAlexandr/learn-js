let age = prompt("Введите свой возраст", "20");
let flag = "";
flag = !(age >= 14 && age <= 90) ? "не находится" : "находится";
alert(flag);
