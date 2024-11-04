/* ---------------------------- */
/* Nullish Coalescing Operator  */
/* ---------------------------- */

let emailAddress;
let receivedEmailAddress;

if (emailAddress === undefined || emailAddress === null) {
  receivedEmailAddress = 'user@company.io';
} else {
  receivedEmailAddress = emailAddress;
}

// 3항 연산자 (ternary) 를 사용한 식으로 변경합니다.

const emailAdderss =
  emailAddress === undefined || emailAddress === null
    ? (receivedEmailAddress = 'user@company.io ')
    : (receivedEmailAddress = emailAddress);

// 위 조건 처리문을 nullish 병합 연산자를 사용한 식으로 변경합니다.

receivedEmailAddress = emailAdderss ?? 'user@company.io';

/* ?? vs. || ----------------------------------------------------------- */
// || → 첫번째 Truthy 값을 반환
// ?? → 첫번째 정의된(defined) 값을 반환

const WIDHT = '10px';
const isActive = false;

console.log(0 || WIDHT);
console.log(0 ?? WIDHT);

console.log(undefined || WIDHT);
console.log(undefined ?? WIDHT);

console.log(isActive || WIDHT);
console.log(isActive ?? WIDHT);

console.log('' || WIDHT);
console.log('' ?? WIDHT);

// 온라인 쇼핑몰 구매 기능

// 1. 사용자 상태
// - 회원 / 비회원
// - 회원 => 일반 / 프리미엄

// 2. 할인 규칙
// - 모든 사용자(회원, 비회원) 첫 구매 시 5% 팔인이 적용됩니다.
// - 일반 회원은 두 번째 구매부터 10% 할인 받습니다.
// - 프리미엄 회원은 항상 20% 할인 받습니다.
// - 비회원은 두 번째 구매부터 할인을 받을 수 없습니다.

// 3. 추가 조건
// - 구매 금액이 2만원 이상일 경우, 추가로 5% 할인이 부여됩니다.

// 함수 로직
// 1. 회원별 할인
// 2. 구매 횟수 할인
// 3. 금액 초과 시 할인
// 4. 조건 계산 후 총 할인율 계산

function discountPrice(userState, count, price) {
  let discount = 0;

  //사용자별 할인
  if (userState === '프리미엄 회원') {
    discount += 0.2;
  } else if (userState === '일반 회원' && count > 1) {
    discount += 0.1;
  } else if (userState === '비회원' && count > 1) {
    discount += 0;
  }
  // 첫 구매 할인
  if (count === 1) {
    discount += 0.05;
  }
  // 구매 금액 2만원 초과 할인
  if (price >= 20000) {
    discount += 0.05;
  }
  // 최종 할인율
  const finalPrice = price * (1 - discount);
  return finalPrice;
}

console.log(discountPrice('프리미엄 회원', 1, 23500));
