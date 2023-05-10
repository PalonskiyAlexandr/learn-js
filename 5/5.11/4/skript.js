function getDateAgo(year, month) {
  let date = new Date(year, month+1, 0);
  return date.getDate();
}

console.log(getDateAgo(2023, 4))
