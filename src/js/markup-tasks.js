export function createMarkupTask({name, desc}) {
    return `<li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${name}</h3>
      <p>${desc}</p>
  </li>`;
}