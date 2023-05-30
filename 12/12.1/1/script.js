let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073

function* pseudoRandom(value) {
  while (true) {
    value = (value * 16807) % 2147484647;
    yield value;
  }
}
