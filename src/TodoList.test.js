import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing", function () {
  render(<TodoList />);
});

it("matches the snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

function addTodo(todoList, todo = "Walk the cats") {
  const todoInput = todoList.getByLabelText("Todo")
  fireEvent.change(todoInput, {target: {value: todo}})
  const button = todoList.getByText("Add New Todo")
  fireEvent.click(button)
}

it("can add a new todo", function () {
  const todoList = render(<TodoList />)

  expect(todoList.queryByText("X")).not.toBeInTheDocument();

  addTodo(todoList);

  const removeButton = todoList.getByText("X")
  expect(removeButton).toBeInTheDocument();
  const addedTodo = todoList.getByText("Walk the cats")
  expect(addedTodo).toBeInTheDocument();

  expect(todoList.getAllByDisplayValue("")).toHaveLength(1)
})

it("removes a todo", function() {
  const todoList = render(<TodoList />)
  addTodo(todoList)

  const removeButton = todoList.getByText("X")
  fireEvent.click(removeButton)
  expect(removeButton).not.toBeInTheDocument()
})