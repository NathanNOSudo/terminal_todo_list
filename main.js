// Author: Nathan Orris
// Date: 04/25/2023
// Description: This is a script that will run in the terminal. It will make and manage a todo list.
// This function will only run in ther terminal. It has 4 commands: display, add, change, and delete.
// - It has a place to store todos like a seperate file
// - It has a way to display todos
// - It has a way to add new todos
// - It has a way to change a todo
// - It has a way to delete a todo

// require todos.json. todos.json is a file that contains an array of todos. it is made up of objects that have a todo and a completed property
// make the todos.json file in the same folder as this file
const todos = require('./todos.json');
// require fs. fs is a node module that allows us to read and write files to install it run npm install fs
const fs = require('fs');
// display todos
const displayTodos = () => {
    // loop through the todos array and log each todo
    todos.forEach(todo => {
        console.log(todo);
    });
    }

// toggle completion status of a todo
const toggleTodo = (index) => {
    todos[index].completed = !todos[index].completed;
    fs.writeFileSync('./todos.json', JSON.stringify(todos));
}

// add a todo
const addTodo = (todo) => {
    todos.push(todo);
    fs.writeFileSync('./todos.json', JSON.stringify(todos));
}
// change a todo
const changeTodo = (index, todo) => {
    todos[index] = todo;
    fs.writeFileSync('./todos.json', JSON.stringify(todos));
}
// delete a todo
const deleteTodo = (index) => {
    todos.splice(index, 1);
    fs.writeFileSync('./todos.json', JSON.stringify(todos));
}
// set command to the command
const command = process.argv[2];
// set index to do the index of the todo
const index = process.argv[3];
// set todo to the todo
const todo = process.argv.slice(3).join(' ');

if (command === 'display') {
    displayTodos();
}
else if (command === 'add') {
    addTodo(todo);
}
else if (command === 'change') {
    changeTodo();
}
else if (command === 'delete') {
    deleteTodo();
}
else if (command === 'toggle') {
    toggleTodo(index);
}
else {
    // Greet the user
    console.log('Welcome to the todo app, Here are the commands:');
    console.log('----------------------------------------------');
    // list the available commands in the terminal
    console.log('display - Display the todos list');
    console.log('add - Add a new todo item');
    console.log('change - Change a todo item');
    console.log('delete - Delete a todo item');
    console.log('----------------------------------------------');
}

// to run this file in the terminal type `node main.js` and a list of commands will be displayed
//  to use with a command here is an example: `node main.js` display will display the todos

