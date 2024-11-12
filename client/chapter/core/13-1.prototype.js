/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우

// object - literal

const animal = {
  legs: 4,
  tali: true,
  stomach:[],
  get Eat(){   // getter
    return  this.stomach
  },
  set Eat(food) {    // setter
    this.stomach.push(food)
    
  }
}

const tiger = {
  pattern: '호랑이 무늬',
  hunt(target){
    this.prey = target;
    this.eat = this.prey
    return `${target}에게 조용히 접근한다`
  },

  __proto__: animal
}

const 백두산호랑이 = {
  name:'백돌이',
  color: 'white',
  __proto__: tiger
}

const 한라산호랑이 = {
  name:'한돌이',
  color:'orange',
  __proto__: 백두산호랑이
}



// object constructor function
// 생성자 함수

function Animal(){
  this.leg = 4;
  this.tail = true;
  this.getEat = function(){
    return this.stomach ?? []
  }
  this.setEat = function(food){
    this.stomach = [];
    this.stomach.push(food)
  }
}

// const a = new Animal();

function Tiger(name) {
  Animal.call(this)
  this.name = name;
  this.pattern = '호랑이 무늬';
  this.hunt= function(target){
    this.prey = target;
    retrun `${target}에게 조용히 접근한다`
  }
}

// Tiger.prototype = a;

const 금강산호랑이 = new Tiger('금순이');


// call -> 함수를 대신 실행시켜줌 -> 빌려쓰기 -> 인수: 값
// apply -> 함수를 대신 실행시켜줌 -> 빌려쓰기 -> 인수: 배열

// bind -> 함수를 대신 실행 X -> 빌려쓰기 ->

// this를 강제하기 위해 위의 3가지를 씀.

function sum(a,b){
  console.log(this, a + b);
}

const _sum = sum.bind('안녕!',10,20);


sum.call('안녕',10,20)