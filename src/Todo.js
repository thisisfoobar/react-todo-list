const Todo = ({id, todo, handleRemove}) => {
  const removeTodo = () => handleRemove(id)
  return (
    <li key={id}>{todo} <button onClick={removeTodo}>X</button></li>
  )
}

export default Todo