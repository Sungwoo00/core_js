import {
  delayP,
  getNode,
  sungwoo,
  changeColor,
  renderSpinner,
  clearContents,
  renderUserCard,
  renderEmptyCard,
} from './lib/index.js';

// // 1. user 데이터 fetch
// // 2. fetch 데이터 유저의 이름만 콘솔에 출력
// const response = await sungwoo.get(END_POINT);
// response.data.forEach((user) => {
//   console.log(user.name);
// });

// // 1. user 데이터 fetch
// // 2. fetch 데이터 유저의 이름만 콘솔에 출력

// const END_POINT = 'https://jsonplaceholder.typicode.com/users';
const END_POINT = 'http://localhost:3000/users';

const userCardInner = getNode('.user-card-inner');

async function renderUserList() {
  renderSpinner(userCardInner);

  try {
    const response = await sungwoo.get(END_POINT);

    // getNode('.loadingSpinner').remove();
    gsap.to('.loadingSpinner', {
      opacity: 0,
      onComplete() {
        this._targets[0].remove();
      },
    });

    const data = response.data;

    await delayP(700);

    data.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
      // delay: 0.5,
      x: -100,
      opacity: 0,
      stagger: {
        each: 0.1,
        from: 'start',
      },
    });
  } catch {
    renderEmptyCard(userCardInner);
  }
}

renderUserList();
function handleDeleteCard(e) {
  const button = e.target.closest('button');

  if (!button) return;

  const article = button.parentElement;
  const index = article.dataset.index.split('-')[1]; // user- 빼기.

  sungwoo.delete(`${END_POINT}/${index}`).then(() => {
    alert('삭제가 완료됐습니다.');

    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener('click', handleDeleteCard);

const createButton = getNode('.create');
const cancelButton = getNode('.cancel');
const doneButton = getNode('.done');

// create 버튼을 선택한다.
// 클릭 이벤트를 바인딩한다.
// create에 open 클래스를 추가한다.

function handleCreate() {
  // this.classList.add('open');
  gsap.to('.pop', { autoAlpha: 1 });
}

function handleCancel(e) {
  e.stopPropagation();
  // createButton.classList.remove('open');
  gsap.to('.pop', { autoAlpha: 0 });
}

const form = getNode('.pop form');

// async function handelDone(e) {
//   e.preventDefault();

//   const username = getNode('#nameField').value;
//   const email = getNode('#emailField').value;
//   const website = getNode('#siteField').value;

//   const newUser = { username, email, website };

//   try {
//     await sungwoo.post(END_POINT, newUser);

//     popup.classList.remove('open');
//     form.reset();

//     clearContents(userCardInner);
//     renderUserList();
//   } catch (error) {
//     alert('유효한 정보를 입력해주세요');
//   }
// }

function handleDone(e) {
  e.preventDefault();

  const username = getNode('#nameField').value;
  const email = getNode('#emailField').value;
  const website = getNode('#siteField').value;

  tiger.post(END_POINT, { username, email, website }).then(() => {
    gsap.to('.pop', { autoAlpha: 0 });
    clearContents(userCardInner);
    renderUserList();

    getNode('#nameField').value = '';
    getNode('#emailField').value = '';
    getNode('#siteField').value = '';
  });
}

createButton.addEventListener('click', handleCreate);
cancelButton.addEventListener('click', handleCancel);
doneButton.addEventListener('submit', handleDone);
