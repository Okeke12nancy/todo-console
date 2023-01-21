//Todo Application

//Import prompt Library
prompt = require("prompt-sync")();

// Application Intro

console.log("Welcome to your Todo App...");
console.log(">>>>>>>>>>>>>>>");
console.log("");

let keepAppRunning = prompt("Press 'S'  to start , press  'Q'  to quit >>>> ");

let makingChoice = true;
let choice;
let todoList = [];

// Add todos to your todoList
const addTodos = () => {
  // Collect User Inputs
  let Mytodos = prompt("What do you want to add to your todo list");
  let todoPriority = prompt("What is your todoPriority");
  todoList.push({
    // Create an Object with the following {key:value} pairs
    id: Math.round(Math.random() * 20),
    item: Mytodos,
    priority: todoPriority,
    isComplete: false,
  });
  return todoList;
};

// Read Todos
const readTodos = () => {
  return todoList;
};

// Update Todos

const updateTodos = (id, item, priority, isComplete) => {
  const todoIndex = todoList.findIndex((obj) => obj.id == id);
  // If the item was suppied then update the item
  if (item) {
    todoList[todoIndex].item = item;
  }

  // If the priority was suppied then update the priority
  if (priority) {
    todoList[todoIndex].priority = priority;
  }

  // If the isComplete was suppied then update the isComplete
  if (isComplete) {
    todoList[todoIndex].isComplete = isComplete;
  }
  return todoList;
};

// Delete Todos
const deleteTodos = (id) => {
  //filters the array and removes the id of the object that matches the chosen id
  todoList = todoList.filter((todo) => todo.id !== id);

  // returns the new todoList after filtering
  return todoList;
};

// Logic of the App
while (makingChoice === true) {
  keepAppRunning.toLowerCase();

  if (keepAppRunning === "q") {
    makingChoice = false;
    console.log("Okay Bye");
    break;
  }
  choice = prompt(
    " Choose from the following options:\n C.Create Todos  \n R. Read TodoList \n U. Update Todos \n D.Delete a todo from your todoList \n Q. Exit Application \n\n"
  );
  // Converts choice to lowercase
  choice = choice.toLowerCase();

  // if the user wants to quit
  if (choice === "q") {
    makingChoice = false;
    console.log("");
    console.log("");
    console.log(">>>>>>>>>>");
    console.log("Thank you for visiting your Todo App, Ciao!");
    console.log(">>>>>>>>>>");
    console.log("");
    console.log("");

    break;
  }

  // If the user wants to create a todo
  if (choice === "r") {
    if (todoList.length < 1) {
      console.log("");
      console.log("");
      console.log(">>>>>>>>>>");
      console.log(" Your Todos is empty");
      console.log(">>>>>>>>>>");
      console.log("");
      console.log("");
    }
    if (todoList.length >= 1) {
      console.log("");
      console.log("");
      console.log(">>>>>>>>>>");
      console.log(" Your TodoList");
      console.log(readTodos());
      console.log(">>>>>>>>>>");
      console.log("");
      console.log("");
    }

    // if the user wants to read the todoList
  } else if (choice === "c") {
    console.log("");
    console.log(">>>>>>>>>>");
    console.log("");

    try {
      console.log("");
      console.log(">>>>>>>>>>");
      console.log(addTodos());
      console.log("Todo added successfully");
      console.log(">>>>>>>>>>");
      console.log("");
    } catch (error) {
      console.log(">>>>>>>>>>");
      console.log(error.message);
      console.log(">>>>>>>>>>");
      console.log("");
      console.log("");
    }
    // If the user wants to update the todoList
  } else if (choice == "u") {
    //
    let id = prompt("What is the id of the item you want to update?");
    let item;
    let priority;
    let isComplete;

    let t = true;
    while (t === true) {
      let o = prompt(
        "Which of this do you want to update? \n1- Item \n2- Priority \n3- IsComplete\n >>>>>  "
      );
      o = Number(o);
      if (o === 1) {
        item = prompt("What is the new name of the item you are updating");
      }

      if (o === 2) {
        priority = prompt("What is the new priority for this todos");
      }
      if (o === 3) {
        isComplete = prompt("Are you done with this Todo?");
      }
      t = false;
      break;
    }
    try {
      console.log(updateTodos(id, item, priority, isComplete));
    } catch (error) {
      console.log(error.message);
    }
    //If the user wants to delete an item from the todoList
  } else if (choice == "d") {
    console.log(">>>>>>>>>>");
    console.log("");
    console.log("");

    try {
      let myTodoId = prompt("What is the Todo Id you want to delete");
      myTodoId = Number(myTodoId);
      console.log(deleteTodos(myTodoId));
    } catch (error) {
      console.log(error.message);
    }
  }
}
