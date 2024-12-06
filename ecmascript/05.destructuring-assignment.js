// 배열의 구조 분해 할당

const number = [1, 2, 3, 4];
const [first = 10, ...rest] = number;

// 객체의 구조 분해 할당

const preson = { name: 'sungwoo', age: 24 };

const { name: n = 'sungwoo', age } = personalbar;

// const name = person,name;
// const age = person,age;

const default1 = {
  title: 'sungwoo',
  timeout: 1000,
  message: 'hello',
};

function f(options) {
  const { title, timeout, message } = { ...default1, ...options };
}

f({
  message: 'bye~',
});
