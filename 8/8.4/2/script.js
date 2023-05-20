let dictionary = Object.create(null);

dictionary.toString = function () {
  let str = Object.keys(this).join(", ");
  return str;
};

Object.defineProperty(dictionary, "toString", {
  enumerable: false,
});

// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"
