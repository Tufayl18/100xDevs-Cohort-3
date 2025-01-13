class Todo {
  constructor() {
    this.todos = [];
  }

  addTodo(todoName) {
    this.todos.push(todoName);
  }

  displayAllTodos() {
    return this.todos;
  }

  displayTodoByIndex(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    }
  }

  removeTodo(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos.splice(index, 1);
    }
  }

  updateTodo(todoName, index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = todoName;
    }
  }

  clearAll() {
    this.todos = [];
  }
}

const todo = new Todo();

todo.addTodo("Learn JavaScript");
todo.addTodo("Build a project");
todo.addTodo("Review code");

console.log("All Todos:", todo.displayAllTodos()); // ["Learn JavaScript", "Build a project", "Review code"]

console.log("Removed Todo:", todo.removeTodo(1)); // "Build a project"

console.log("All Todos After Removal:", todo.displayAllTodos()); // ["Learn JavaScript", "Review code"]
