/* alias*/

/*
type

interface
*/

type User = {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
};

type User1 = {
  address: string;
};

type mixed = User & User1;

interface _User {
  id: number;
  name: string;
  auth: string;
  isPaid: boolean;
}

const user1: User = {
  id: 1,
  name: 'sungwoo',
  auth: 'admin',
  isPaid: true,
};

const user2: User = {
  id: 2,
  name: '2sungwoo',
  auth: 'admin',
  isPaid: true,
};

const user3: User = {
  id: 3,
  name: '3sungwoo',
  auth: 'admin',
  isPaid: false,
};

/* index signature */
// 객체의 키가 동적으로 결정될 때 유용하게 사용 가능

type Person = {
  name: string;
  age: number;
  [key: string]: string | number;
};

const person: Person = {
  name: 'sungwoo',
  age: 30,
  email: 'sungwoo@naver.com',
  address: '대전',
};
