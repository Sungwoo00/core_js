import {
  getNode as $,
  getNodes,
  insertLast,
  clearContents,
} from './lib/dom/index.js';

function phase1() {
  const first = getNode('#firstNumber');
  const second = getNode('#secondNumber');
  const result = getNode('.result');

  // function handleCalc() {
  //   const firstValue = Number(first.value) || 0;
  //   const secondValue = Number(second.value) || 0;
  //   result.innerHTML = firstValue + secondValue;
  // }

  function handleInput() {
    const firstValue = Number(first.value) || 0;
    const secondValue = +second.value;
    const total = firstValue + secondValue;

    clearContents(result);

    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();

    clearContents(first);
    clearContents(second);
    result.textContent = '-';
  }

  first.addEventListener('input', handleInput);
  second.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}

function phase2() {
  const calculator = $('.calculator');
  const result = $('.result');
  const clear = $('#clear');
  const numberInputs = [...document.querySelectorAll('input:not(#clear)')];

  function handleInput() {
    const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

    clearContents(result);
    insertLast(result, total);
  }

  function handleClear(e) {
    e.preventDefault();

    numberInputs.forEach(clearContents);
    result.textContent = '-';
  }

  calculator.addEventListener('input', handleInput);
  clear.addEventListener('click', handleClear);
}
phase2();
