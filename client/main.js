import { getNode, setStorage, getStorage, deleteStorage } from './lib/index.js';

// 1. 인풋 이벤트 바인딩
// 2. 인풋 값을 로컬 스토리지에 저장(타이핑 하는 매 순간마다)
// 3. init함수 안에서 로컬스토리지에 있는 값을 가져와 인풋의 value로 설정
// 새로고침 => 데이터 유지

const textField = getNode('#textField');
const clearButton = getNode('button[data-name="clear"]');

function handleInput() {
  const value = this.value;
  setStorage('text', value);
}

function handleClear() {
  textField.value = '';
  deleteStorage('text');
}

function init() {
  getStorage('text').then((res) => {
    textField.value = res;
  });
}

textField.addEventListener('input', handleInput);
clearButton.addEventListener('click', handleClear);

init();
