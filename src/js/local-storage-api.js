import { renderMarkupTaskList } from './render-tasks';

function saveTask(task) {
  const taskArr = getTasks() || [];
  taskArr.push(task);
  localStorage.setItem('TASKS', JSON.stringify(taskArr));
}
function getTasks() {
  return JSON.parse(localStorage.getItem('TASKS'));
}
function initTask() {
  const listTask = getTasks() || [];
  renderMarkupTaskList(listTask);
}

function deleteTask(id) {
  const listTask = getTasks() || [];
  const filteredArr = listTask.filter(task => task.id !== id);
  localStorage.setItem('TASKS', JSON.stringify(filteredArr));
}
export default { saveTask, getTasks, initTask, deleteTask };
