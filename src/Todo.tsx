import './Todo.css'
import React from 'react';

interface TodoProps {
  todo: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggle: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, toggle }) => {
  return (
    <div
      className={`todo ${todo.completed ? 'completed' : ''}`}
      onDoubleClick={() => toggle(todo.id)}
    >
      {todo.text}
    </div>
  );
};

export default Todo;
