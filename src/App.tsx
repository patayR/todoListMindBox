import "./App.css";
import React, { useState } from "react";
import TodoList from "./TodoList.tsx";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type Filter = "all" | "active" | "completed";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTaskText, setNewTaskText] = useState("");
  const [filter, setFilter] = useState<Filter>("all");

  const addTodo = () => {
    if (newTaskText.trim()) {
      setTodos([
        ...todos,
        { id: Date.now(), text: newTaskText, completed: false },
      ]);
      setNewTaskText("");
    }
  };

  const toggleTodoCompletion = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  const remainingCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-app">
      <span className="todo-title">Todo List</span>
      <div className="todo-input">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addTodo()}
        />
      </div>
      <TodoList todos={filteredTodos} toggle={toggleTodoCompletion} />
      <div className="todo-footer">
        <span>{remainingCount} items left</span>
        <div className="filter-buttons">
          <span
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </span>
          <span
            className={filter === "active" ? "active" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </span>
          <span
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </span>
        </div>
        <span className="clear-completed" onClick={clearCompletedTodos}>
          Clear completed
        </span>
      </div>
    </div>
  );
}

export default App;
