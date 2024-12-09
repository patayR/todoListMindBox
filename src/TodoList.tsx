import './TodoList.css'
import React from "react";
import Todo from "./Todo.tsx";


interface TodoProps {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: TodoProps[];
  toggle: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggle }) => {
  return (
    <div className='todo-list'>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggle={toggle} />
      ))}
    </div>
  );
};

export default TodoList;
