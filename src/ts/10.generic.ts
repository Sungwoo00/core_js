// generic type!!!!!!!!!!!!!!!!!!!!!!!!!

function sumFunc<T>(value: T): T {
  return value;
}

const a = sumFunc(10);
const b = sumFunc('hello');
const c = sumFunc(false);

// 키워드 관례
// T: Type
// U: Unkown or Unique
// K: Key
// V: Value
// E: Element
// R: Return

function swapAtoB<T, U>(a: T, b: U): (T | U)[] {
  return [b, a];
}

swapAtoB(1, true);

function getLength<T extends { length: number }>(data: T): number {
  return data.length;
}
const b1 = getLength([1, 2, 3]);
const b2 = getLength('hi');
const b3 = getLength({ name: 'sungwoo', length: 3 });
