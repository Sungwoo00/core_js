/* Array type */

let arr: number[] = [1, 2, 3];

let str: string[] = ['a', 'b', 'c'];

/* generic type 타입 변수 => 함수 */

let _arr: Array<number> = [1, 2, 3];
let _str: Array<string> = ['a', 'b', 'c'];

// 유니온 타입 union type + array type
let multi: (string | number | boolean)[] = ['hello', 10, false];

// multi = ['hello', 10, true];

/* Tuple Type 
-> 길이가 고정 되어 있음, 
  배열처럼 길이가 동적으로 변경되지 않음,
  자리가 정해져 있음
*/

let tupleA: [number, number] = [1, 2];

let person: [string, number] = ['sungwoo', 25];

// 다차원 배열
const user: [string, number][] = [
  ['성우', 25],
  ['이성우', 21],
  ['우성', 23],
];
