import {
  delayP,
  getNode,
  sungwoo,
  changeColor,
  renderSpinner,
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

const END_POINT = 'https://jsonplaceholder.typicode.com/users';

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
        amount: 1,
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
  });
}

userCardInner.addEventListener('click', handleDeleteCard);
