import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const INITIAL_STATE = [
    // { id: uuid(), todo: "Walk the cats" },
    // { id: uuid(), todo: "Feed the lawn" },
  ];
  const [todos, setTodos] = useState(INITIAL_STATE);
  const addTodo = (newTodo) => {
    setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
  };
  const removeTodo = (id) => {
    setTodos(todos => todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h2>Todo List</h2>
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map(({ id, todo }) => (
          <Todo key={id} id={id} todo={todo} handleRemove={removeTodo} />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
