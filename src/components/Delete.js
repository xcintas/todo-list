let Delete = ({ onSubmit }) => {
  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <button type="submit"> Delete </button>
      </form>
    </div>
  )
}

export default Delete