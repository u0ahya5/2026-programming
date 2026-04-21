import { useState } from 'react';
import './todolist.css'
// import Button from './components/Button';
// import TodoItemEmpty from './components/TodoItemEmpty.jsx';
import TodoHeader from './components/TodoHeader.jsx';
// import Checkbox from './components/Checkbox.jsx';
import TodoAdder from './components/TodoAdder.jsx';
// import TodoItem from './components/TodoItem.jsx';
import TodoList from './components/TodoList.jsx';

class Todo{
    constructor(text){
        this.id = Date.now();     // 할 일 고유 id, new Data().get
        this.text = text;         // 할 일 내용
        this.isCompleted = false; // 완료 여부: 기본값 false
    }
}

function TodoListApp(){
    const [todos, setTodos] = useState([]); // 할 일 목록: 기본값 빈 리스트
    const addTodo = (text) => setTodos((todos) => [
        // 이전 todos 복사
        ...todos,
        // newTodo 만들자
        // 이전 todos에 추가하자
        new Todo(text)
    ]);
    // const addTodo = (text) -> setTodos((todos) => [...todos, new Todo(text)])

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) => 
                todo.id === id ? {...todo, isCompleted : !todo.isCompleted} : todo
            )
        )
    }
    const deleteTodo = (id) => {
        //id가 같지 않은 todo만 복사하자(filter())
        setTodos(
            (todos) => todos.filter((todo) => todo.id !== id)
        )
    }
    const editTodo = (id, newText) => {
        // todos에서 하나씩 todo 꺼내고, id가 같은 todo 찾아서, text만 바꾸기
        setTodos((todos) =>
            todos.map((todo) => 
                todo.id == id ? {...todo, text: newText} : todo
            )
        )
    }
    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
        </div>
    )
}

export default TodoListApp;