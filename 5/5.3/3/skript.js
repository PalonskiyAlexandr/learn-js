function truncate (str, maxLength){
  if (str.length > maxLength){
    str = str.substring(0,19)+"...";
  }
  return str;
}

console.log(truncate(`Вот, что мне хотелось бы сказать на эту тему:`, 20));

console.log(truncate("Всем привет!", 20));