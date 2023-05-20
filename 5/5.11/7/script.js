function getSecondsToTomorrow() {
  let date = new Date();
  let yesturday = new Date();
  yesturday.setHours(0, 0, 0);
  return (+date - +yesturday)/1000;
}

console.log(getSecondsToTomorrow());
