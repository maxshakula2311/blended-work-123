import { createMarkupTask } from './markup-tasks';
import refs from './refs';

export function renderMarkupTask(task) {
  refs.taskList.insertAdjacentHTML('beforeend', createMarkupTask(task));
}
export function renderMarkupTaskList(tasks) {
  refs.taskList.insertAdjacentHTML(
    'beforeend',
    tasks
      .map(task => {
        return createMarkupTask(task);
      })
      .join(' ')
  );
}
