function checkSpam (str){
  const banWords = ['viagra', 'xxx']
  str = str.toLowerCase();
  for (let i = 0; i<3; i++){
    
    if (str.includes(banWords[i])){
      return true;
    }
  }
}

console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam("innocent rabbit") == false);