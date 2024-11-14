/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

// const second = document.getElementsByClassName('second')[0];
// const _second = document.querySelector('.second');

// console.log(second.parentElement) // hi

/* 문서 대상 찾기 */
// - getElementById
// - getElementsByTagName
// - getElementsByClassName
// - querySelector
// - querySelectorAll
// - closest


console.log(getNode('.about', 'nav'));

// 1. nav 태그 요소
const nav = document.querySelector('nav');
console.log(nav);

// 2. nav 태그 안에 있는 abou li 태그 요소
const navInAbout = nav.querySelector('.about');

// 3. data-name이 contcat인 li 요소
const nameContcat = document.querySelector('li[data-name="contact"]');

// 4. nav 요소 안에 있는 모든 자식 요소
const navChildren = nav.querySelectorAll('*');
console.log(navChildren);

/* 문서 대상 확인 */
// - matches
// - contains
