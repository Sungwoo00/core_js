/* ---------------------------- */
/* Functions → Declaration      */
/* ---------------------------- */

console.log('총 합 = ', 10000 + 8900 + 1360 + 2100);
console.log('총 합 = ', 21500 + 3200 + 9800 + 4700);
console.log('총 합 = ', 3800 + 15200 - 500 + 80200);
console.log('총 합 = ', 560 + 5000 + 27100 + 10200);
console.log('총 합 = ', 9000 - 2500 + 5000 + 11900);

// 함수 선언

function getRandomValue() {
  return Math.random() > 0.5 ? 1 : 0;
}

function calcPrice(
  priceA,
  priceB = getRandomValue(),
  priceC = getRandomValue(),
  priceD = getRandomValue()
) {
  // if (priceD === undefined) priceD = 0;
  // if (!priceD) priceD = 0;
  // if (!priceA) throw new Error('clacPrice 함수에 매개변수 값을 1개 이상 넣어주세요');

  // priceD = priceD || 0;
  // priceD ||= 0;

  // priceD = priceD ?? 100;
  // priceD ??= 100;

  return priceA + priceB + priceC + priceD;
}

// 함수 호출
const result = calcPrice();

console.log(result);

// 함수 값 반환

// 매개 변수

// 매개 변수 (parameter) vs. 전달 인수 (argument)

// 외부(전역 포함), 지역 변수

// 매개 변수 기본 값

// 좋은 함수 작성 여건

// 1. 함수는 하나의 기능만을 수행해야 함
// 2. 함수는 재사용성이 좋아야함
// 3. 직관적인 작명을 해야함(기능을 유추할 수 있는 이름)
// 4. 인자를 많이 사용하지 않아야 함(관리의 어려움)

/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// rem(pxValue: number|string, base: number):string;
let rem;

// 1. rem(20)을 던지면 1.25rem
// 2. rem(25px)을 던지면 1.5625rem
// 3. rem('30px',10) === 3rem  30/10으로 처리

let base = 16;

function transRemPx(pxValue, base) {
  if (typeof pxValue === 'number') {
    return pxValue / base + 'rem';
  } else if (typeof pxValue === 'string') {
    const transValue = parseFloat(pxValue);
    return transValue / base + 'rem';
  } else {
    throw new Error('숫자나 문자열을 넣어주세요!');
  }
}

console.log(transRemPx(20));
console.log(transRemPx('25px'));
console.log(transRemPx('30px', 10));

console.clear();
// css(node: string, prop: string, value: number|strung) : string;

function setCss(node, property, value) {
  if (typeof node === 'string') node = document.querySelector(node);

  if (!(property in document.body.style))
    throw new ReferenceError(
      'setCssg 함수의 두번째 인수는 유효한 css 속성 이어야 합니다.'
    );
  if (!value)
    throw new Error('setCss 함수의 세 번째 인수는 필수 입력 값입니다');

  node.style[property] = value;
}

setCss('.first', 'backgroundColor', 'red');

function getCss(node, property) {
  if (typeof node === 'string') {
    node = document.querySelector(node);
  }

  if (!(property in document.body.style)) {
    throw new Error('setCss 함수의 두 번째 인수는 필수 입력 값입니다');
  }

  return node ? getComputedStyle(node)[property] : null;
}

const fontsize = getCss('.first', 'font-size');

console.log(fontsize);

function css(node, property, value) {
  // if (!value) {
  //   return getCss(node, property);
  // } else {
  //   return setCss(node, property, value);
  // }

  return !value ? getCss(node, property) : setCss(node, property, value);
}
console.log(css('.first', 'color'));

css('.first', 'color', 'yellow');

// 1. function name
// 2. arguments(함수 실행부)
// 3. parameter
// 4. return value
// 5. validation
// 6. Test Driven Develop

// node의 값을 'h1'으로 받았을 경우

// node가 없거나 document.ELEMENT_NODE가 아닐 경우

// prop의 값이 string이 아닐 경우

// prop의 값이 style 속성이 아닐 경우

// value의 값이 number가 아닌 경우

// 클릭 이벤트를 이용한 h1의 폰트 크기를 증가시키는 함수와 감소시키는 함수 만들기

// 1. h1,plus,minus 요소를 변수로 지정한다.
// 2. h1의 폰트 사이즈를 가져온다.
// 3. 증가함수와 감소함수를 만든다.
// 4. 클릭 이벤트와 바인딩한다.
