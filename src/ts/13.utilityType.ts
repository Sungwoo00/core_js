/* Omit */

type User = {
  id: number;
  name: string;
  email: string;
};

type PublicUser = Omit<User, 'email'>;

const user: PublicUser = {
  id: 1,
  name: 'sungwoo',
};

/* Pick */

const user2: Pick<User, 'id' | 'name'> = {
  id: 2,
  name: 'sungwoo',
};

/* Partial */

type Address = {
  lat: number;
  long: number;
};

type User3 = {
  id: number;
  name?: string;
  email?: string;
  address: Address;
};

const user3: Partial<User3> = {
  name: 'seon',
};

type User4 = {
  id: number;
  name: string;
  email: string;
};

const user4: Readonly<User4> = {
  id: 1,
  name: 'sungwoo',
  email: 'sungwoo@naver.com',
};

// user4.id = 3;

/* Required */

const user5: Required<User3> = {
  id: 1,
  name: 'sungwoo',
  email: 'sungwoo@naver.com',
  address: {
    lat: 20,
    long: 33.5,
  },
};

type ShallowPartial<T> = {
  [K in keyof T]?: T[K];
};

const user6: ShallowPartial<User3> = {
  name: 'sungwoo',
  address: {
    lat: 20,
    long: 33.5,
  },
};
