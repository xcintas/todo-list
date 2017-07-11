const Delete = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <button type="submit"> Delete </button>
      </form>
    </div>
  )
}

export default Delete