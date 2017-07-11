import Todo from './Todo'

const TodoList = ({ todos, isLoading, onTodoDelete }) => (
  <ul style={isLoading ? { opacity: 0.2 }: { opacity: 1 }}>
    {todos.map(todo =>
      <Todo key={todo.id} todo={todo} onClick={() => onTodoDelete(todo.id)}/>
    )}
  </ul>
)

export default TodoList
