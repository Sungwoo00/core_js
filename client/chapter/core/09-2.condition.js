/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b; // => a &&= b와 같음

console.log(AandB);

// 논리합(또는) 연산자
let AorB = a || b;

console.log(AorB);

// Logical OR assignment

a ||= b; // => a = a || b와 같음

// 부정 연산자
let reverseValue = value;

console.log(!reverseValue);

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
// let whichFalsy = true && ' ' && [] && { thisIsFlasy: flase };

// // 첫번째 Truthy를 찾는 연산 (||)
// let whichTruthy = false || '' || [2, 3].length || { thisIsTruthy: true };

let user = prompt('이름 입력해주세요:');

if (user && user.toLowerCase() === 'admin') {
  // if(user === null || user ===undefined) return
  // if(!user)return
  let password = prompt('비밀번호 입력해주세요:');

  if (password && password.toLowerCase() === 'themaster') {
    console.log('환영합니다!');
  } else if (password === null) {
    console.log('취소하셨습니다.');
  } else if (password.trim() === '') {
    console.log('비밀번호를 입력하지 않았습니다.');
  } else {
    console.log('인증에 실패하셨습니다.');
  }
} else if (user === null) {
  console.log('취소하셨습니다.');
} else if (user.trim() === '') {
  console.log('사용자 이름을 입력하지 않았습니다.');
} else {
  console.log('사용자 정보가 없습니다!!!!!!');
}

// function login(){

//   let userName = prompt('누구십니까?');

//   // if(userName === null || userName === undefined) return
//   // if(!userName) return

//   if(userName.toLowerCase() === 'admin'){

//     let password = prompt('비밀번호를 입력해주세요');

//     if(password.toUpperCase() === 'MASTER'){
//       console.log( '로그인 성공' );

//     }else if(password === null){
//       console.log('취소됐습니다.');

//     }else{
//       console.log('잘못된 정보를 입력하셨습니다.');
//       login()
//     }
//   }
//   else if(userName === null || userName.replace(/\s*/g,'') === ''){
//     console.log('취소됐습니다.');

//   }
//   else{
//     console.log('제대로된 값을 입력해주세요');
//   }

// }

// login()
