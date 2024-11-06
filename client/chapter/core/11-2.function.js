/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */

// function calcTotal(moneyA, moneyB, moneyC, moneyD) {
//   return moneyA + moneyB + moneyC + moneyD;
// }

// const resultX = calcTotal(10000, 8900, 1360, 2100);
// const resultY = calcTotal(21500, 3200, 9800, 4700);
// const resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);

// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function () {
  // 함수 안에서만 접근 가능한 인수들의 집합 객체 존재 : arguments => 유사 배열 => 지역 변수

  let total = 0;
  // for문
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }

  // for...of
  // for (arg of arguments) {
  //   total += arg;
  // }

  // aruments => array

  // const arr = [...arguments];  // spread syntax
  // const arr = Array.from(arguments); //배열의 static method
  const arr = Array.prototype.slice.call(arguments); //배열의 instance method

  // instance method
  //

  // forEach  => 배열 순환 => 값을 반환하지 않음
  // arr.forEach(function (price) {
  //   total += price;
  // }),
  //   console.log(arr);

  // reduce => 배열 순환 => 값을 반환 (문자, 숫자, 불린, 배열, 객체 등......)
  // total = arr.reduce(function (acc, cur) {
  //   return acc + cur;
  // }, 0);

  // reduce + arrow function
  // arr.reduce((acc, cur) => arr + cur);

  // arguments
  // 한번만 빌려쓰는 방법

  // Array.prototype.forEach.call(arguments, function(price){
  //   total += price
  // })

  // 던더 프로토 (부모 바꿔치기)
  arguments.__proto__ = Array.prototype;

  console.log(arguments);

  console.log(total);
};

// const obj = {
//   total: null,
//   item: [1000, 2000, 3000],

//   totalPrice() {
//     this.item.forEach((price) => {
//       this.total += price;
//     });
//   },
// totalPrice() {
//   this.item.forEach(function (price) {
//     this.total += price;
//   }, this);
// },
// };

// obj.totalPrice();

const result = calculateTotal(10000, 30000, 45000, 2500, 30000, 25000);

//Array instance method
// forEach  => 배열 순환 => 값을 반환하지 않음
// reduce => 배열 순환 => 값을 반환 : 문자, 숫자, 불린, 배열, 객체 등......
// map => 배열을 순환 => 값을 반환 : 새로운 배열

const friends = ['박혜미', '이강현', '공세현', 'MJ'];

const f = friends.map(function (name, index) {
  return '범쌤_친구' + name;
});

// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression = function () {};

// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression = function hello() {};

// 콜백 함수 (표현)식
let cb = function (condition, success, fail) {
  if (condition) success();
  else fail();
};

cb(
  true,
  function () {
    console.log('성공입니다');
  },
  function () {
    console.log('실패입니다');
  }
);
//

// arrow function
cb(
  true,
  () =>  console.log('성공입니다!') ,
  () =>  console.log('실패입니다!') 
)


function movePage(url, success, fail) {
  if (url.includes('https')) {
    success(url)
    }else {
      fail()
    };
}

// 콜백 함수 => arrow function
// arrow function

movePage(
  'https://www.daum.net',
  url =>  `현재 입력하신 url은 ${url}입니다. 3초 뒤 해당 사이트로 이동합니다.`,
  () => console.log('잘못된 경로를 입력하셨습니다.')
)

movePage(
  'https://www.naver.com',
  function (url) {
    console.log(`현재 입력하신 url은 '${url}' 입니다`)
  },
  function () {
    '잘못된 경로를 입력하셨습니다'
  }
);



function getGeolocation(success,fail){

  
  let data;


  navigator.geolocation.getCurrentPosition((so)=>{
    success(so.coords.latitude)
  })
  return data 
}



getGeolocation(
  (data)=>{
    console.log(data);
  },
  ()=>{
    
  }
)





// 함수 선언문 vs. 함수 (표현)식

// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
let IIFE;


// 함수가 선언됨과 동시에 실행되는 것을 말합니다.

// var는 블록 스코프 : x
// var는 함수 스코프 : o 

// encapsulation (캡슐화)

// 모듈 프로그래밍 => import export

const MASTER = (function(){


  var uuid = 'sdfa@fadk31s5dfbn2fg!^2dfc7';

  return {
    getKey() {
      return uuid
    },
    setKey() {
      uuid = value
    }
  }


})()