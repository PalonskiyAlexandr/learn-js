let user = {
  name: 'John',
  age2: 30,
  age3: 30,
  age4: 30,
};

console.log( count(user) ); // 2


function count(obj){
  return Object.keys(obj).length;
}