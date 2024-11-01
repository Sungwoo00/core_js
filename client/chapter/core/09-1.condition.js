/* ---------------- */
/* Condition        */
/* ---------------- */

// const what = prompt(`자바스크립트의 '공식' 이름은 무엇일까요?`, '');
// if ('ECMAScript' == what) {
//   alert('정답입니다!');
// } else {
//   alert('모르셨나요? 정답은 ECMAScript 입니다!');
// }

// const input = +prompt('숫자 입력해주세요', ' ');

// if (typeof input !== 'number') {
//   no;
// }

// if (input > 0) {
//   console.log(1);
// } else if (input < 0) {
//   console.log(-1);
// } else if (input == 0) {
//   console.log(0);
// }

// let a, b;

// let result = a + b < 4 ? '미만' : '이상';

let login;

let message =
  login == '직원'
    ? '안녕하세요'
    : '임원'
      ? '환영합니다'
      : ''
        ? '로그인이 필요합니다'
        : '';

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

function watchingMovie() {
  // 영화 봤니?
  let didWatchMovie = confirm('그 영화 봤니?');

  // 영화 볼거니?
  let goingToWatchMovie;

  if (didWatchMovie) {
    console.log('영화 재밌더라');
  } else {
    let goingToWatchMovie = confirm('영화 볼래?');

    if (goingToWatchMovie) {
      let who = prompt('누구랑 볼거야?');
      if (who === '너') {
        console.log('좋아~');
      } else {
        console.log('누구랑 보니ㅠ');
      }
    } else {
      console.log('ㅠ');
    }
  }
}

// if 문(statement)

// else 절(clause)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

let didWatchMovie = 'no';
let goingToWatchMovie = 'yes';

const msg = didWatchMovie.includes('yes')
  ? '영화 재밌더라'
  : goingToWatchMovie.includes('yes')
    ? '언제 볼래?'
    : '왜?';

// function render(node, isActive) {
//   // 조건부 랜더링
//   let template = `
//     <div>${isActive ? '안녕' : '잘가'}</div>
//   `;

//   node.insertAdjacentHTML('beforeend', template);
// }
