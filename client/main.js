import { Button } from './components/Button/Button.js';
import { Card } from './components/Card/Card.js';
import { Counter } from './components/Counter/Counter.js';

const app = document.getElementById('app');

function defineElements() {
  customElements.define('custom-button', Button);
  customElements.define('custom-card', Card);
  customElements.define('custom-counter', Counter);
}

defineElements();

const buttonElement = document.createElement('custom-button');

// app.append(buttonElement);
// // console.log(temp.content.cloneNode(true));
// class MyElement extends HTMLElement {
//   constructor() {
//     super();

//     this.attachShadow({ mode: 'open' });
//     this._render();
//     this.card = this.shadowRoot.querySelector('.card');
//   }

//   connectedCallback() {
//     this.card.addEventListener('click', this.handleClick.bind(this));
//   }

//   handleClick() {
//     console.log(this.getAttribute('data-name'));
//   }

//   _render() {
//     this.shadowRoot.innerHTML = `

//         <style>
//         @import url('./style.css');
//         </style>

//         <div class="card">
//           <slot name="title">Default Title</slot>
//           <slot name="content">Default Contents</slot>
//           <slot></slot>
//         </div>
//     `;
//   }
// }

// customElements.define('my-element', MyElement);
