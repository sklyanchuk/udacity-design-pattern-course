const Model = {
  init() {
    if (!localStorage.todoItems) {
      localStorage.todoItems = JSON.stringify([]);
    }
  },
  add(todoObj) {
    let data = JSON.parse(localStorage.todoItems);
    data.push(todoObj);
    localStorage.todoItems = JSON.stringify(data);
  },
  getAllTodoItems() {
    console.log(JSON.parse(localStorage.todoItems));
    return JSON.parse(localStorage.todoItems);
  }
}

const Controller = {
  init() {
    Model.init();
    View.init();
  },
  addToDoItem(todoItem) {
    Model.add({
      todoItem: todoItem,
      dateCreated: new Date()
    })
    View.render();
  },
  getNotes() {
    return Model.getAllTodoItems();
  }
}

const View = {
  init() {
    this.todoList = document.querySelector('.to-do-list');
    document.querySelector('.add-to-do-item').addEventListener('click', (event) => {
      let todoItem = document.querySelector('.to-do-name').value;
      if (todoItem) {
        Controller.addToDoItem(todoItem);
        document.querySelector('.to-do-name').value = '';
      }
      event.preventDefault();
    });
    this.render();
  },
  render() {
    let htmlStr = '';
    Controller.getNotes().forEach((todo) => {
        htmlStr += '<div><h3 class="note">'+ todo.todoItem + '</h3><p>' + new Date(todo.dateCreated).toLocaleDateString() + '</p></div>';
    });
    this.todoList.innerHTML = htmlStr;
  }
}

Controller.init();
