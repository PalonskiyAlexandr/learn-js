function getSecondsToTomorrow() {
  let date = new Date();
  let tommorow = new Date();
  tommorow.setHours(24, 0, 0);
  return (+tommorow - +date)/1000;
}

console.log(getSecondsToTomorrow());
