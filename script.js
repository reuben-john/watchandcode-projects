// Basic todo list
var todoList = {
  todos: [], // Stores todo list
  // Logs display list to console
  displayTodos: function() {
    console.log("My todos", this.todos);
  },
  // Adds todo item to todo list
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  // Changes text of todo item on list
  changeTodo: function(position, value) {
    this.todos[position].todoText = value;
    this.displayTodos();
  },
  // Deletes todo from list
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  // Toggles completed boolean on todo
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};
