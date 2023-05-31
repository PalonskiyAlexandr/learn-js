let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let result = animals.sort((a, b) => new Intl.Collator("ru").compare(a, b));

alert(animals); // АИСТ,ёж,енот,ехидна,тигр,ЯК
