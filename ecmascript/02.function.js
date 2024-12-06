// 함수 선언문 (일반함수 / 생성자 함수)
function f1() {
  // console.log(arguments);
}

// new f1()

f1(1, 2, 3, 4, 5);

// 함수 표현식 (일반함수 / 생성자 함수)
const f2 = function () {
  console.log(arguments);
};

f2(1, 2, 3, 4, 5);

// 함수 표현식: 화살표 함수
const f3 = (...rest) => {
  console.log(rest);
};

f3(1, 2, 3, 4);
