import { Poke } from './type';

const END_POINT = 'https://pokeapi.co/api/v2/pokemon/3';

async function fetchData(url: string): Promise<Poke> {
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

function createCard(data: Poke) {
  const tag = `
    <div class="card">
      <img src="${data.sprites['front_default']}" alt="" />
      <h2>${data.name}</h2>
    </div>
  `;
  return tag;
}

function renderCard(target: Element, data: Poke) {
  target.insertAdjacentHTML('beforeend', createCard(data));
}

async function render() {
  const data = await fetchData(END_POINT);
  renderCard(document.body, data);
}

// render()

// data.sprites['front_default']

function fetchPokemon() {
  const arr: Promise<Poke>[] = [];

  Array(10)
    .fill(null)
    .forEach((_, i) => {
      const url: string = `https://pokeapi.co/api/v2/pokemon/${i + 1}`;
      arr.push(fetch(url).then((res) => res.json()));
    });

  return arr;
}

async function createPokemonObject(arr: Promise<Poke>[]) {
  let pokemon: unknown;

  await Promise.all(arr).then((all) => {
    pokemon = all.map((item) => ({
      name: item.name,
      image: item.sprites['front_default'],
    }));
  });
  return pokemon;
}

async function renderPokemon() {
  const data = fetchPokemon();

  const p = await createPokemonObject(data);

  if (Array.isArray(p)) {
    const tag = p
      .map(
        (item) => `
      <li class="card">
        <img src="${item.image}" alt="" />
        <h2>${item.name}</h2>
      </li>
    `
      )
      .join('');

    const ul = document.querySelector('ul') as HTMLUListElement;
    ul.insertAdjacentHTML('beforeend', tag);
  }
}

renderPokemon();
