var todoList = {
  todos: [1, 2, 3],
  displayTodos: function() {
    console.log("My todos", this.todos);
  },
  addTodo: function(todo) {
    this.todos.push(todo);
    this.displayTodos();
  },
  changeTodo: function(position, value) {
    this.todos[position] = value;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  }
};
