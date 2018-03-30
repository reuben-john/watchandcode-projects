// Basic todo list
var todoList = {
  todos: [], // Stores todo list
  // Logs display list to console
  displayTodos: function() {
    console.log("My todos:");
    if (this.todos.length === 0) {
      console.log("Your todo list is empty");
    } else {
      // Loops through todo list
      // Displays text and whether they are completed or not
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
    view.displayTodos();
  },
  // Changes text of todo item on list
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    view.displayTodos();
  },
  // Deletes todo from list
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    view.displayTodos();
  },
  // Toggles completed boolean on todo
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    view.displayTodos();
  },
  // If all todos are completed, set them all to not completed
  // Otherwise all are set to completed
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    if (completedTodos == totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    view.displayTodos();
  }
};

// Button handlers
var handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    var changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
  },
  deleteTodo: function() {
    var deleteTodoPositionInput = document.getElementById(
      "deleteTodoPositionInput"
    );
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById(
      "toggleCompletedPositionInput"
    );
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = "";
  },
  toggleAll: function() {
    todoList.toggleAll();
  }
};

// HTML views
var view = {
  displayTodos: function() {
    var todosUl = document.querySelector("ul");
    todosUl.innerHTML = "";
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLi = document.createElement("li");
      var todo = todoList.todos[i];
      var todoTextWithCompletion = "";
      if (todo.completed === true) {
        todoTextWithCompletion = "(X) " + todo.todoText;
      } else {
        todoTextWithCompletion = "( ) " + todo.todoText;
      }
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
    }
  }
};
