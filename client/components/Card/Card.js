export class Card extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    this.state = {
      showImage: this.getAttribute('show-image') || 'true',
      title: this.getAttribute('title') || 'Card Title',
    };

    this.render();
  }

  connectedCallback() {}
  disconnectedCallback() {}

  static get observedAttributes() {
    return ['show-image'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'show-imgae') {
      this.state.showImage = newValue === 'true';
      this.render();
      console.log('리랜더링');
    }
  }

  render() {
    const { showImage, title, description } = this.state;

    const figure = `
      <figure>
        <img src="./assets/visual.jpg" alt="" />
        <figcaption class="a11y-hidden">눈으로 뒤덮힌 산</figcaption>
      </figure>
    `;

    this.shadowRoot.innerHTML = `
      <style>@import url('./components/Card/Card.css');</style>
      <div class="card">
        ${showImage === 'true' ? figure : ''}
        <h2>${title}</h2>
        <p>
          <slot name="desc">description...</slot>
        </p>
      </div>
    `;
  }
}
