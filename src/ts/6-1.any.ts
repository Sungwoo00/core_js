let unknownValue: unknown;

// toFixed(2) - 소수점 2자리까지 표시해주는 메서드
unknownValue = 123.456;
if (typeof unknownValue === 'number') {
  console.log(unknownValue.toFixed(2)); // "123.46"
}

// toUpperCase() - 대문자로 변환 해주는 메서드
unknownValue = 'hello';
if (typeof unknownValue === 'string') {
  console.log(unknownValue.toUpperCase()); // "HELLO"
}

// getTime() - Date 객체의 시간 가져오는 메서드
unknownValue = new Date();
if (unknownValue instanceof Date) {
  console.log(unknownValue.getTime()); // timestamp
}

// nextElementSibling - DOM 요소의 다음 형제 요소 가져오는 메서드
unknownValue = document.querySelector('div');
if (unknownValue instanceof Element) {
  console.log(unknownValue.nextElementSibling);
}
