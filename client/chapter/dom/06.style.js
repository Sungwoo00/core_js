/* -------------------- */
/* DOM Styling          */
/* -------------------- */

const nav = getNode('nav');

/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log(nav.className); // getter

// nav.className = 'navigation' // setter

// console.log(nav.classList);

// nav.classList.add('hello');
// nav.classList.remove('hello');

// console.log(nav.classList.contains('navigation'));

// nav.classList.toggle('is-active')

// function addClass(node, prop) {
 
//   if(isString(node)) node = getNode(node)
//   return node.classList.add(prop)

// }

// function removeClass(node, prop){

//   if(isString(node)) node = getNode(node)
//   if(!prop) {
//     node.prop = '';
//   }
//   return node.classList.remove(prop)

// }

// function toggleClass(node, prop) {
//   if(isString(node)) node = getNode(node)
//   return node.classList.toggle(prop)
// }

// function addClass(node,...className){
  
//   if(isString(node)) node = getNode(node);

//   className.forEach((c)=> {

//     if(c.includes(',')){
      
//       c = c.replace(/\s*/g,'').split(',')
//     }

//     if(isArray(c)){
//       c.forEach((c)=>{
//         node.classList.acc(c);
//       })
//     } else {
//       node.classList.add(c);
//     }
//   })
// }


// function removeClass(node,className){
//   if(isString(node)) node = getNode(node);
//   if(!className){
//     node.className = '';
//   }
//   node.classList.remove(className);
// }


// function toggleClass(node,className){
//   if(isString(node)) node = getNode(node);
//   return node.classList.toggle(className);
// }


// function getClassesFromProp(prop) {
//   if (isString(prop)) {
//     return prop.split(',').map(item => item.trim());
//   } else if (Array.isArray(prop)) {
//     return prop;
//   } else if (typeof prop === 'object' && prop !== null) {
//     return Object.keys(prop).filter(key => prop[key]);
//   } else {
//     throw new TypeError('prop 인수는 문자열, 배열, 객체 중 하나여야 합니다.');
//   }
// }
addClass(nav,'hello')


/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

// nav.style.background = 'dodgerblue';

// nav.style.cssText = `
//   color:white;
//   padding:1rem;
//   background:black;
// `

/* 계산된 스타일 읽기 ------------------------------------------------------- */

// console.log( getComputedStyle(nav).backgroundColor );

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`


// getCss()
// setCss()
// css()