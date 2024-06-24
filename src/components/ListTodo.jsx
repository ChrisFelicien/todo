import Todo from "./Todo";

const ListTodo = ({ listTodo, onCompleted, onDelete }) => {
  return (
    <ul className='grid place-content-center gap-4'>
      {listTodo.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onCompleted={onCompleted}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ListTodo;
