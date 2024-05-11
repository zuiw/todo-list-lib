# 这是我的一个代办列表库

## 使用方法

1.安装
```bash
npm i @todo/list
```
2.使用
```js
import TodoList from 'todo-list.js'

const todoList = new TodoList()

todoList.addTodo('todo1')
todoList.addTodo('todo2')
todoList.addTodo('todo3')

console.log(todoList.getTodos()) // ['todo1', 'todo2', 'todo3']

todoList.removeTodo('todo2')

console.log(todoList.getTodos()) // ['todo1', 'todo3']

todoList.completeTodo('todo1')

console.log(todoList.getTodos()) // ['todo1 (completed)', 'todo3']
```