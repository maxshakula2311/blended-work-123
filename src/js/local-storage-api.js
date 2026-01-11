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

// theme

function saveTheme(theme) {
  localStorage.setItem('THEME', theme);
}

function getTheme() {
  return localStorage.getItem('THEME');
}

export default {
  saveTask,
  getTasks,
  initTask,
  deleteTask,
  saveTheme,
  getTheme,
};
