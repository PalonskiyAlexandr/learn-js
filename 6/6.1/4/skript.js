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
  console.log(list.value);
  if (list.next) {
    print(list.next);
  }
}
