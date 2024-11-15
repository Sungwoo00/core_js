/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"

function handler() {
  console.log('안녕');
}


// 2. DOM 프로퍼티 : element.onclick = handler

const about = getNode('.about');
const home = getNode('.home');
// about.onclick = handler

// 3. 메서드 : element.addEventListener(event, handler[, phase])

function handler(e) {
  console.log(e.offsetX)
}

about.addEventListener('click',handler); 

// remove => 버튼 disable 해줄 때 같이 해주면 리소스 아낄 수 있음, add와 remove의 함수는 동일해야함.


// const remove = bindeEvent(about,'click',handler);

// console.log(remove)
// home.addEventListener('click',remove)


const ground = getNode('.ground');
const ball = getNode('.ball');

function handleBall(e){

  const { offsetX:x, offsetY:y } = e

  // const x = e.offsetX;
  // const y = e.offsetY;
  const w = ball.offsetWidth;
  const h = ball.offsetHeight;

  ball.style.transform = `translate(${x - w / 2 }px, ${y - h / 2}px)`
}

ground.addEventListener('click',handleBall)

function handleMove({ offsetX:x, offsetY:y }){
  // const w = ball.offsetWidth;
  // const h = ball.offsetHeight;
  // ball.style.transform = `translate(${x - w / 2 }px, ${y - h / 2}px)`

  const template = `
    <div class='emotion' style="top:${y}px; left:${x}px">👍</div>
  `
  insertLast(ground,template)
}

ground.addEventListener('mousemove',handleMove)


//debounce 

const input = getNode('input');

function handleInput(){
  if(this.value === 'sungwoo@gmail.com'){
    console.log('ok');
  }
  
}

input.addEventListener('input',handleInput);




/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener