function delay(ms) {
  return new Promise(function(resolve, reject){
    setTimeout(() => resolve(ms), ms);
  });
}

delay(3000).then(result => console.log(`выполнилось через ${result} секунды`));
