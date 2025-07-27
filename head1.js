document.addEventListener('DOMContentLoaded', () => {
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // DOM Elements
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const addButton = document.getElementById('addBtn');
  const clearCompletedButton = document.getElementById('clearCompleted');
  const taskCountElement = document.getElementById('taskCount');

  // Initialize the app
  renderTasks();
  setupEventListeners();

  function setupEventListeners() {
    addButton.addEventListener('click', addTask);
    clearCompletedButton.addEventListener('click', clearCompletedTasks);
    taskInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') addTask();
    });
  }

  function renderTasks() {
    taskList.innerHTML = '';
    
    if (tasks.length === 0) {
      taskList.innerHTML = '<li class="empty-state">No tasks yet. Add one above!</li>';
      updateTaskCount();
      saveTasks();
      return;
    }

    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      if (task.completed) li.classList.add('completed');
      
      li.innerHTML = `
        <span class="task-text">${escapeHTML(task.text)}</span>
        <div class="task-buttons">
          <button class="complete-btn" data-index="${index}">
            ${task.completed ? 'Undo' : 'Complete'}
          </button>
          <button class="delete-btn" data-index="${index}">Delete</button>
        </div>
      `;
      taskList.appendChild(li);
    });

    // Add event listeners to new buttons
    document.querySelectorAll('.complete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        toggleComplete(parseInt(e.target.dataset.index));
      });
    });

    document.querySelectorAll('.delete-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        deleteTask(parseInt(e.target.dataset.index));
      });
    });

    updateTaskCount();
    saveTasks();
  }

  function addTask() {
    const text = taskInput.value.trim();
    if (text) {
      tasks.push({ text, completed: false });
      taskInput.value = '';
      renderTasks();
      taskInput.focus();
    }
  }

  function toggleComplete(index) {
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }
  }

  function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      renderTasks();
    }
  }

  function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    renderTasks();
  }

  function updateTaskCount() {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.completed).length;
    taskCountElement.textContent = `${completedTasks}/${totalTasks} tasks completed`;
  }

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag]));
  }
});