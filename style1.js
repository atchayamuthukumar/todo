:root {
  --primary-color: #4361ee;
  --secondary-color: #3a0ca3;
  --completed-color: #4cc9f0;
  --danger-color: #f72585;
  --light-gray: #f8f9fa;
  --dark-gray: #6c757d;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  padding: 50px 20px;
  min-height: 100vh;
}

.container {
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 500px;
}

h1 {
  text-align: center;
  color: var(--secondary-color);
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
}

input[type="text"] {
  flex: 1;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

input[type="text"]:focus {
  outline: none;
  border-color: var(--primary-color);
}

button {
  padding: 12px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s;
}

#addBtn {
  background-color: var(--primary-color);
  color: white;
}

#addBtn:hover {
  background-color: var(--secondary-color);
}

.task-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  color: var(--dark-gray);
  font-size: 14px;
}

#clearCompleted {
  background-color: transparent;
  color: var(--danger-color);
  padding: 5px 10px;
}

#clearCompleted:hover {
  text-decoration: underline;
}

ul {
  list-style-type: none;
}

li {
  padding: 15px;
  background-color: var(--light-gray);
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  transition: all 0.3s;
}

li.completed {
  background-color: rgba(76, 201, 240, 0.1);
}

li.completed .task-text {
  text-decoration: line-through;
  color: var(--dark-gray);
}

.task-text {
  flex: 1;
  margin-right: 15px;
  word-break: break-word;
}

.task-buttons {
  display: flex;
  gap: 8px;
}

.task-buttons button {
  padding: 8px 12px;
  font-size: 14px;
}

.complete-btn {
  background-color: var(--primary-color);
  color: white;
}

.complete-btn:hover {
  background-color: var(--secondary-color);
}

.delete-btn {
  background-color: var(--danger-color);
  color: white;
}

.delete-btn:hover {
  opacity: 0.9;
}

.empty-state {
  text-align: center;
  color: var(--dark-gray);
  padding: 20px;
  background-color: transparent !important;
}

@media (max-width: 480px) {
  .container {
    padding: 20px;
  }
  
  .input-group {
    flex-direction: column;
  }
  
  #addBtn {
    width: 100%;
  }
}