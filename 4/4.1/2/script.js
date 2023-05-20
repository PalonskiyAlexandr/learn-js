let schedule = {};

alert(isEmpty(schedule));

schedule["8:30"] = "get up";

alert(isEmpty(schedule));

function isEmpty(schedule) {
  for (let key in schedule) {
    return true;
  }
  return false;
}
