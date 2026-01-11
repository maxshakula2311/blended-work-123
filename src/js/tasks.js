import { renderMarkupTask } from "./render-tasks";
import localStorageApi from "./local-storage-api";

export function handleAddTask(event) {
  event.preventDefault();
  const { taskName, taskDescription } = event.target.elements;
  if (taskName.value.trim() === '' || taskDescription.value.trim() === '') {
    alert('Invalid data! Please fill in the inputs!');
    return;
  }
  const task = {
    name: taskName.value.trim(),
    desc: taskDescription.value.trim(),
    };
  renderMarkupTask(task);
  localStorageApi.saveTask(task);
    event.target.reset();
}
