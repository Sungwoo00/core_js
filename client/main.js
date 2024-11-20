import {
  attr,
  getNode,
  getNodes,
  endScroll,
  insertLast,
  diceAnimation,
  clearContents,
} from './lib/index.js';

// [주사위 굴리기 버튼을 누르면 주사위가]
// 1. 주사위 굴리기 버튼을 선택하기
// 2. 클릭 이벤트 바인딩

// [애니메이션이 될 수 있도록 만들어 주세요]
// 1. setInterval
// 2. diceAnimation()

// [같은 버튼 눌렀을 때 ]
// 1. 상태 변수 true | false
// 2. 조건 처리

// [애니메이션이 재생 or 정지]
// 1. setInterval
// 2. clearInterval ( scope )

// [기록 버튼 누르면]
// 1. recordButton에 이벤트 바인딩

// [table 등장]
// recordListWrapper에 hidden 속성 제어

// [table 안쪽 tr 태그에 데이터 넣고 랜더링]

// [item의 갯수가 많아짐에 따라 스크롤을 제일 하단으로 올 수 있게]

// [reset버튼 눌렀을 때 모든 항목 초기화]

// closure (IIFE 패턴 적용)

const [rollingButton, recordButton, resetButton] = getNodes(
  '.buttonGroup > button'
);

const recordListWrapper = getNode('.recordListWrapper');

const handleRollingDice = (() => {
  let isClicked = true;
  let stopAnimation;

  return () => {
    if (!isClicked) {
      stopAnimation = setInterval(diceAnimation, 200);
      recordButton.disabled = true;
      resetButton.disabled = true;
      console.log('첫 번째 클릭');
    } else {
      clearInterval(stopAnimation);
      recordButton.disabled = false;
      resetButton.disabled = false;
      console.log('두 번째 클릭');
    }

    isClicked = !isClicked;
  };
})();

let count = 0;
let total = 0;

function createItem(value) {
  const template = `
  <tr>
    <td>${++count}</td>
    <td>${value}</td>
    <td>${(total += value)}</td>
  </tr>
`;
  return template;
}

function renderRecordItem() {
  const diceNumber = +attr(getNode('#cube'), 'dice');

  insertLast('tbody', createItem(diceNumber));
}

function handleRecord() {
  recordListWrapper.hidden = false;

  renderRecordItem();
  endScroll(recordListWrapper);
}

function handleReset() {
  recordListWrapper.hidden = true;
  [count, total] = [0, 0];
  clearContents('tbody');
}

rollingButton.addEventListener('click', handleRollingDice);
recordButton.addEventListener('click', handleRecord);
resetButton.addEventListener('click', handleReset);
// 주사위 굴리기 버튼을 누르면 주사위가 애니메이션이 될 수 있도록 만들기

// const dice = document.querySelector('button');
// let isActive = true;
// let intervalStatus;

// function activeDice() {
//   isActive = !isActive;

//   if (isActive) {
//     intervalStatus = setInterval(() => {
//       diceAnimation();
//     }, 1000);
//   } else {
//     clearInterval(intervalStatus);
//   }
// }

// dice.addEventListener('click', handleDice);
