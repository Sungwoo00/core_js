/* -------------------------- */
/* Optional Chaining          */
/* -------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// console.log(portableFan.photos?.animate);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.

// portableFan && portableFan.photos && portableFan.photos.animate

// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.

//  portableFan.photos?.animate

// // 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.

// const fullName = portableFan.getFullName()

// console.log(fullName)

// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.




// sync(동기)     async(비동기) => Promise, async await
// 자바스크립트는 단일 스레드


// setTimeout은 시간을 보장해주지 않음

const button = document.querySelector('.my-button');



const t = setTimeout(() => {

  const tag = `<button type='button' class="my-button">BTN</button>`

  document.body.insertAdjacentHTML('beforeend', tag);

},5000) 

button?.addEventListener('click',() => {
  console.log('Clicked!')
})


let count = 0;

// setInterval(()=>{
//   // console.log('안녕?',++count);
//   // 애니메이션 등의 주기적인 변화
//   // document.querySelector('.second').computedStyleMap.transform = `translateY(-${++count}px) rotate(${count}deg)`

//   if(count >= 500){
//     clearInterval(c)
//   }
// },10000)


function animation(){

    // document.querySelector('.second').computedStyleMap.transform = `translateY(-${++count}px) rotate(${count}deg)`

  requestAnimationFrame(animation)
}

