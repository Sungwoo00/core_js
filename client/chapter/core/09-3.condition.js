/* ---------------- */
/* Switch           */
/* ---------------- */

// let a = 15;

// switch (a) {
//   case 13:
//     alert('10');
//     break;

//   case 10:
//     alert('13');
//     break;

//   case 15:
//     alert('15');
//     break;

//   case 20:
//     alert('20');
//     break;
// }

const MORNING = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  NIGHT = '밤',
  LATE_NIGHT = '심야',
  DAWN = '새벽';

let thisTime = LUNCH;

// switch (thisTime) {
//   case MORNING:
//     alert('뉴스 기사 글을 읽는다.');
//     break;
//   case LUNCH:
//     alert('자주 가는 식당에 가서 식사를 한다.');
//     break;
//   case DINNER:
//     alert('동네 한바퀴를 조깅한다');
//     break;
//   case NIGHT:
//     alert('친구에게 전화를 걸어 수다를 떤다.');
//     break;

//   case LATE_NIGHT:
//   case DWAN:
//     alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
//     break;
// }

// if (thisTime === MORNING) {
//   alert('뉴스 기사 글을 읽는다.');
// } else if (thisTime === LUNCH) {
//   alert('자주 가는 식당에 가서 식사를 한다.');
// } else if (thisTime === DINNER) {
//   alert('동네 한바퀴를 조깅한다');
// } else if (thisTime === NIGHT) {
//   alert('친구에게 전화를 걸어 수다를 떤다.');
// } else if (thisTime === LATE_NIGHT || thisTime === DAWN) {
//   alert('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
// }

/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'

/* switch문 → if문 변환 --------------------------------------------------- */

/* switch vs. if -------------------------------------------------------- */

console.clear();

// 함수는 하나의 기능만을 수행하는 것 (클린코드)
// // sepration of concerns (관심사의 분리)

// function getRandom(n) {
//   const value = Math.floor(Math.random() * n);
//   return value;
// }

// function getDay(value) {
//   let day;

//   switch (value) {
//     case 0:
//       day = '월';
//       break;

//     case 1:
//       day = '화';
//       break;

//     case 2:
//       day = '수';
//       break;

//     case 3:
//       day = '목';
//       break;

//     case 4:
//       day = '금';
//       break;

//     case 5:
//       day = '토';
//       break;

//     case 6:
//       day = '일';
//       break;

//     default:
//       alert('숫자 0부터 6까지 입력 가능합니다!');
//       break;
//   }
//   alert(day);
//   return value;
// }

// function weekend(day) {
//   switch (day) {
//     case 0:
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//       console.log('평일');
//       break;

//     case 5:
//     case 6:
//       console.log('주말');
//       break;
//   }
// }

// const day = getDay(getRandom(7));
// weekend(day);

// function randomGetDay(){

//   const value = Math.floor(Math.random() * 7)

//   switch (value) {
//     case 0: console.log('일');break;
//     case 1: console.log('월');break;
//     case 2: console.log('화');break;
//     case 3: console.log('수');break;
//     case 4: console.log('목');break;
//     case 5: console.log('금');break;
//     case 6: console.log('토');break;
//   }
// }

function printAbc() {
  console.log('printABC');
}

printAbc();
