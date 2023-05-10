function ucFirst(str){
  str = str[0].toUpperCase()+str.substring(1,str.length);
  console.log(str.substring(1,str.length));
  console.log(str);
  return str;
}

console.log(ucFirst("вася") == "Вася");