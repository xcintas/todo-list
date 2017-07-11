import { Link } from 'react-router-dom'

const Todo = ({ todo, onClick }) => (
  <li>
    <Link to={`/todo/${todo.id}`}>{todo.text}</Link>&nbsp;
    <a onClick={onClick}>delete</a>
  </li>
)

export default Todo
