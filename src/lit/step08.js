import { LitElement, html, css } from 'lit';

import s from '/src/lit/test.css?inline';

class TodoList extends LitElement {
  static properties = {
    _listItems: { state: true },
    hideCompleted: {},
  };

  static styles = css/* css */ `
    .completed {
      text-decoration: line-through;
      color: #777;
    }
  `;

  constructor() {
    super();

    this._listItems = [
      { text: '독서하기', completed: true },
      { text: '영화보기', completed: false },
    ];
    this.hideCompleted = false;
  }

  get input() {
    return this.renderRoot.querySelector('.newItem') ?? null;
  }

  addTodoItem() {
    this._listItems = [...this._listItems, { text: this.input.value, completed: false }];

    this.input.value = '';
  }

  toggleCompleted(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  render() {
    const items = this.hideCompleted ? this._listItems.filter((item) => !item.completed) : this._listItems;
    const finishMessage = html` <p>아싸 끗~</p> `;
    const todos = html`
      <ul>
        ${this._listItems.map((item) => html` <li class="${item.completed ? 'completed' : ''}" @click=${() => this.toggleCompleted(item)}>${item.text}</li>`)}
      </ul>
    `;
    const todosOrMessage = itmes.length > 0 ? todos : finishMessage;
    return html/* html */ `
      <style>
        ${s}
      </style>
      <h2 class="title">To Do List</h2>

      <label id="newItem">
        <input class="newItem" type="text" id="newItem" aria-label="새로운 아이템" />
      </label>
      <button type="button" @click=${this.addTodoItem}>추가</button>

      <hr />
      <labe>
        <input type="checkbox" @change=${this.setHideCompleted} />
        hide complted
      </labe>
    `;
  }

  setHideCompleted(e) {
    this.hideCompleted = e.target.checked;
  }
}

customElements.define('todo-list', TodoList);

app.append(document.createElement('todo-list'));

// import { LitElement, html, css } from 'lit';

// import s from '/src/lit/test.css?inline';

// class TodoList extends LitElement {
//   static properties = {
//     _listItems: { state: true },
//     hideCompleted: { type: Boolean },
//   };

//   static styles = css/* css */ `
//     .completed {
//       text-decoration: line-through;
//       color: #777;
//     }
//   `;

//   constructor() {
//     super();

//     this._listItems = [
//       { text: '독서하기', completed: true },
//       { text: '영화보기', completed: false },
//     ];
//     this.hideCompleted = false;
//   }

//   get input() {
//     return this.renderRoot.querySelector('.newItem') ?? null;
//   }

//   addTodoItem() {
//     this._listItems = [...this._listItems, { text: this.input.value, completed: false }];

//     this.input.value = '';
//   }

//   toggleCompleted(item) {
//     item.completed = !item.completed;
//     this.requestUpdate();
//   }

//   toggleHideCompleted() {
//     this.hideCompleted = !this.hideCompleted;
//   }

//   render() {
//     const items = this.hideCompleted ? this._listItems.filter((item) => !item.completed) : this._listItems;
//     const todosOrMessage =
//       items.length > 0
//         ? html` <ul>
//             ${items.map((item) => html` <li class="${item.completed ? 'completed' : ''}" @click=${() => this.toggleCompleted(item)}>${item.text}</li>`)}
//           </ul>`
//         : html`<p>You're all caught up!</p>`;

//     return html`
//       <style>
//         ${s}
//       </style>
//       <h2>To Do</h2>
//       ${todosOrMessage}
//       <input class="newItem" type="text" id="newitem" aria-label="New item" />
//       <button type="button" @click=${this.addTodoItem}>추가</button>
//       <div>
//         <button type="button" @click=${this.toggleHideCompleted}>${this.hideCompleted ? 'Show' : 'Hide'} completed</button>
//       </div>
//     `;
//   }
// }
// customElements.define('todo-list', TodoList);

// app.append(document.createElement('todo-list'));
