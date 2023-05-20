let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};
print(list);

function print(list) {
  if(list.next){
    print(list.next);
  }

  console.log(list.value);
}
