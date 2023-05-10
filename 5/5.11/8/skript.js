console.log(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date() - 86400 * 1000)));

function formatDate(date) {
  let diiff = new Date() - date;
  if (diiff / 1e3 < 1) {
    return "Прямо сейчас";
  } else if (diiff / 6e4 < 1) {
    return `${Math.round(diiff / 1e3)} сек. назад`;
  } else if (diiff / 36e5 < 1) {
    return `${Math.round(diiff / 6e4)} мин. назад`;
  } else {
    return getFormattedDate(date);
  }
}

function getFormattedDate(date) {
  let d = [
    "0" + date.getDate(),
    "0" + (date.getMonth() + 1),
    date.getFullYear().toString(),
    "0" + date.getHours(),
    "0" + date.getMinutes(),
  ].map(element => element.slice(-2));
  return `${d.slice(0, 3).join(".")} ${d.slice(3).join(":")}`;
}
