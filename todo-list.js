/*!
	* todo-list.js v1.0.0
	* A simple todo list application written in JavaScript.
	* author: wuyuchen
	* Copyright 2023-2024
	* MIT License
*/

class TodoList {
	
	constructor() {
	  this.todos = [];
	}
	
	addTodo(todo) {
		if (typeof todo !== 'string') throw new Error('Todo must be a string');
	  	this.todos.push(todo);
	}
	
	removeTodo(index) {
		
	  	if (index < 0 || index >= this.todos.length) {
		  throw new Error('Invalid index');
		}

	  	this.todos.splice(index, 1);
	}

	completeTodo(index) {
		
		if (index < 0 || index >= this.todos.length) {
		  throw new Error('Invalid index');
		}
		
		this.todos[index] = this.todos[index] + ' (completed)';
	}

	printTodos() {
	  console.log(this.todos);
	}

	printCompletedTodos() {
	  console.log(this.todos.filter(todo => todo.includes(' (completed)')));
	}

	printPendingTodos() {
	  console.log(this.todos.filter(todo => !todo.includes(' (completed)')));
	}

	getTodos() {
		return this.todos;
	}

	setTodos(todos) {
	  if (!Array.isArray(todos)) throw new Error('Todos must be an array');
	  this.todos = todos;
	}

	clearTodos() {
	  this.todos = [];
	}
}