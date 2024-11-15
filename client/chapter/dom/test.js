const arr = [30, undefinedm 15, 108]
const [x, y=10, ...rest] = arr;
const value = y + rest[0];

console.log(value)