// Basic todo list
var todoList = {
  todos: [], // Stores todo list
  // Logs display list to console
  displayTodos: function() {
    console.log("My todos:");
    if (this.todos.length === 0) {
      console.log("Your todo list is empty");
    } else {
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(X)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
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
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
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
