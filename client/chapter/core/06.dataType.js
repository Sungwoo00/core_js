/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값

let empty = null;
console.log(typeof empty);

// 2. 값이 할당되지 않은 상태

let undef;
console.log(typeof undef);

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)

const double = 'hello';
const single = 'hello';
const backtick = `hello`;

console.log(typeof double, single, backtick);

// 4. 정수, 부동 소수점 숫자(길이 제약)

const integer = 150;
const floatingPointNumber = 1.23;

console.log(integer);
console.log(floatingPointNumber);

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)

const bigInt = 12123141223123113n;

console.log(bigInt);

// 6. 참(true, yes) 또는 거짓(false, no)

const isActive = true;
console.log(isActive);

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)

const v = {
  name: 'sungwoo',
  age: 72,
};

console.log(v);

// 8. 고유한 식별자(unique identifier)

const uuid = Symbol('uuid');
console.log(uuid);

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof
// 2) 함수 typeof()

// 언어 상, 오류

// Object

// Array

// function

// this
