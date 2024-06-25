const Todo = ({ todo, onCompleted, onDelete }) => {
  const { id, title, completed } = todo;

  return (
    <li className='grid grid-flow-row-col auto-cols-max grid-cols-3 '>
      <input
        type='checkbox'
        className='self-center row-auto'
        checked={completed}
        onChange={() => onCompleted(id)}
      />
      <p className={`${completed && "line-through"} 'col-span-3'`}>{title}</p>
      <button
        className='self-center justify-self-end bg-red-500  px-3 rounded-sm'
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Todo;
