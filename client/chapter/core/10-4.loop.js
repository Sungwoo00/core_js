/* ---------------- */
/* For In Loop      */
/* ---------------- */

const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
  hasOwnProperty() {
    return 'hi';
  },
};

console.log('creator' in javaScript);
console.clear();
// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

// console.log(javaScript.hasOwnProperty('creator'));

// console.log(Object.prototype.hasOwnProperty.call(javaScript, 'nickname'));

// console.log(Object.hasOwn(javaScript, 'nickname'));

// for ~ in 문
// - 객체 자신의 속성만 순환하려면?

// 객체의 key 조회
// 객체의 value 조회

for (const key in javaScript) {
  if (Object.hasOwn(javaScript, key)) {
    const value = javaScript[key];
    console.log(value);
  }
}

// - 배열 객체 순환에 사용할 경우?
// 배열도 for...in문으로 순환이 가능은하다.
// for...in은 객체..

// for...in문은 순서를 보장하지 않음. 배열은 순서에 굉장히 민감한 데이터

const tens = [10, 100, 1000, 10_000];

for (const key in tens) {
  // console.log(key);
}

// enumerable : 열거 가능한

for (const key in javaScript) {
  console.log(key);
}

const obj = {};

obj.nickname = 'sungwoo';

Object.defineProperty(obj, 'age', {
  value: 30,
  // 보다 안전한 설계를 위한 설정값 조절 가능 (객체 훼손 방지 등의 기능)
  enumerable: true, // default: false
  writable: true, // default: false
  configurable: true, // default: false
});

console.log(obj);

for (const key in obj) {
  console.log(key);
}
