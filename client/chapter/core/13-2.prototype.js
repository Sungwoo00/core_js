/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

// object literal -> function constructor -> Class syntax



// class Animal {
  
//   // public class filed
//   legs = 4;
//   tail = true;
//   #name = 'unknown';

//   constructor(name) { // 최초 1회만 실행 -> 초기화
//     this.#name = name
//     this.stomach = [];
//     console.log(this.#name)
//   }

//   get eat(){
//     return this.stomach;
//   }

//   set eat(food){
//     this.stomach.push(food);
//   }
// }

// // const options = {
// //   version: '1.0.0',
// //   company: '8b-studio',
// //   ceo: '심선범'
// // }

// class Tiger extends Animal {

//   static defaultProps = {
//     version: '1.0.0',
//     company: '8b-studio',
//     ceo: '심선범'
//   }

//   constructor(name){
//     super(name);
//     this.pattern = '호랑이 무늬'
//   }

//   hunt(target){
//     this.prey = target;
//     return `${target}에게 조용히 접근한다.`
//   }

//   static bark(sound){
//     return sound + '🐯'
//   }

// }

// // const a = new Animal('몽실이');
// const 호랑이 = new Tiger('호돌이');


/* 
1. 버튼 선택
2. 클릭 이벤트
3. 카운트
*/

// const button = document.querySelector('.btn')

// let count = 0;

// function handleClick(){
  
//   const tag = `
//     <div>${++count + 'clicked!'}</div>
//   `
//   document.body.insertAdjacentHTML('beforeend',tag)
// }

// button.addEventListener('click',handleClick)



class User {

  #password;
  
  constructor(userID,userPW){
    this.userID = userID;
    this.#password = this.hashPassword(userPW);
  }

  hashPassword(pw){
    return 'hashCODE' + pw + 'ㅇadsfasdf';
  }

  checkPassword(pw){
    return this.#password === this.hashPassword(pw);
  }
  
}


const user = new User('tiger','hello123')


// class AdminUser extends User{

//   checkPassword(){
//     this.#password // 는 못 씀
//   }
// }


class Button{

  constructor(selector){
    this.button = document.querySelector(selector);
    this.count = 0;
    this.attachEvent();
  }

  createTag(){
    return `<div>${++this.count + 'clicked'}</div>`
  }
  
  _render(){
    document.body.insertAdjacentHTML('beforeend',this.createTag())
  }

  handleClick(){

    this._render()
    
  }
  
  attachEvent(){
    

    this.button.addEventListener('click',()=> this.handleClick())
  }

}

const button = new Button('.btn');
const button2 = new Button('.btn2');


// const _button = document.querySelector('.btn');

// let count = 0;


// function createTag(){
//   return `<div>${++count + 'clicked'}</div>`
// }

// function render(data){
//   document.body.insertAdjacentHTML('beforeend',data)
// }

// function handleClick(){

//   render(createTag());

// }

// _button.addEventListener('click',handleClick)