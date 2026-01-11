import { renderMarkupTask } from './render-tasks';
import localStorageApi from './local-storage-api';
import { nanoid } from 'nanoid';

export function handleAddTask(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.target.elements;
  if (taskName.value.trim() === '' || taskDescription.value.trim() === '') {
    alert('Invalid data! Please fill in the inputs!');
    return;
  }
  const task = {
    id: nanoid(),
    name: taskName.value.trim(),
    desc: taskDescription.value.trim(),
  };
  console.log('🚀 ~ handleAddTask ~ task:', task);
  renderMarkupTask(task);

  localStorageApi.saveTask(task);
  event.target.reset();
}

export function handleDeleteTask(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const liEl = event.target.closest('li');
  const liElementId = liEl.dataset.id;
  liEl.remove();
  localStorageApi.deleteTask(liElementId);
}
