/* Array type */
let arr = [1, 2, 3];
let str = ['a', 'b', 'c'];
/* generic type 타입 변수 => 함수 */
let _arr = [1, 2, 3];
let _str = ['a', 'b', 'c'];
// 유니온 타입 union type + array type
let multi = ['hello', 10, false];
// multi = ['hello', 10, true];
/* Tuple Type
-> 길이가 고정 되어 있음,
  배열처럼 길이가 동적으로 변경되지 않음,
  자리가 정해져 있음
*/
let tupleA = [1, 2];
let person = ['sungwoo', 25];
// 다차원 배열
const user = [
    ['성우', 25],
    ['이성우', 21],
    ['우성', 23],
];
export {};
