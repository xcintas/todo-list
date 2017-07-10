
let todos = [
  { id: 0, text: "git pull" },
  { id: 1, text: "git status" },
  { id: 2, text: "git add ." },
  { id: 3, text: "git commit" },
  { id: 4, text: "enter message" },
  { id: 5, text: "git push" }
]

const defaultTimeout = 500

let getTodos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos)
    }, 0)
  })
}

let getTodo = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let rez = todos.find((todo) => {
        return todo.id === id
      })
      resolve(rez)
      
    }, defaultTimeout)
  })
}

let addTodo = (text) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let maxId = -1;

      todos.forEach((todo) => {
        if (todo.id > maxId) {
          maxId = todo.id
        }
      })

      todos.push({
        id: maxId + 1,
        text
      })

      resolve()

    }, defaultTimeout)
  })
}

let deleteTodo = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.splice(todos.findIndex((todo) => {
        return todo.id === id
      }),1)

      resolve()

    }, defaultTimeout)
  })
}

let deleteTodos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos = []
      resolve()

    }, defaultTimeout)
  })
}

export { getTodo, addTodo, getTodos, deleteTodo, deleteTodos }