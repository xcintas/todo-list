const Add = ({ onSubmit }) => {
  let input

  return (
    <form onSubmit={e => {
        onSubmit(e, input)
      }}>
      <input ref={node => {
        input = node
      }} />
      <button type="submit"> Add </button>
    </form>
  )
}

export default Add