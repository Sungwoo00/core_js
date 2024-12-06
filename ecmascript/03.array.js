const product = {
  title: '애플 제품',
  data: [
    { name: '맥북', price: 400 },
    { name: '아이폰', price: 150 },
    { name: '아이패드', price: 200 },
    { name: '애플워치', price: 70 },
  ],
};

//foreach
product.data.forEach((item) => {
  // console.log(item);
});

// filter
product.data.filter((item) => {
  return item.price >= 100;
});

// find
product.data.find((item) => {
  return item.price === 200;
});

// map
product.data.map((item) => item.price * 2);

// reduce
product.data.reduce((acc, cur) => {
  return acc + cur.price;
}, 0);
